class Admin::BranchesController < Admin::AdminController
  before_action :set_branch, only: [:show, :edit, :update, :destroy]

  # GET /branches
  # GET /branches.json
  def index
    params[:per_page] = 10 unless params[:per_page].present?

    condition = { company_id: current_admin.branch.company_id }

    @branch_count = Branch.where(condition).count
    @branches = Branch.where(condition).page(params[:page]).per(params[:per_page]).order('id desc')
  end

  # GET /branches/1
  # GET /branches/1.json
  def show
  end

  # GET /branches/new
  def new
    @branch = Branch.new
    @branch.build_branch_setting
    @branch.build_branch_setting.build_branch_setting_user_type
    @branch.build_branch_picture
  end

  # GET /branches/1/edit
  def edit
  end

  # POST /branches
  # POST /branches.json
  def create
    @branch = Branch.new(branch_params)
    @branch.company_id = @current_branch.company_id

    respond_to do |format|
      if @branch.save
        check_anon_and_create(@branch.id)

        format.html { redirect_to [:admin, @branch], notice: t(:message_success_create) }
        format.json { render :show, status: :created, location: @branch }
      else
        @branch.build_branch_setting
        @branch.build_branch_setting.build_branch_setting_user_type
        @branch.build_branch_picture

        format.html { render action: 'new' }
        format.json { render json: @branch.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /branches/1
  # PATCH/PUT /branches/1.json
  def update
    respond_to do |format|
      if @branch.update(branch_params)
        check_anon_and_create(@branch.id)

        format.html { redirect_to [:admin, @branch], notice: 'branch was successfully updated.' }
        format.json { render :show, status: :ok, location: @point }
      else
        format.html { render :edit }
        format.json { render json: @branch.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /branches/1
  # DELETE /branches/1.json
  def destroy
    @branch.destroy
    respond_to do |format|
      format.html { redirect_to admin_branches_url, notice: 'branch was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  def switch
    session[:branch_id]=params[:id]

    set_branch_setting

    respond_to do |format|
      format.html { redirect_to admin_branches_url, notice: 'branch was successfully switched.' }
      format.json { head :no_content }
    end
  end

  private

  def check_anon_and_create(branch_id)
    unless @branch.branch_setting.user_type.id == 1
      anon_count = User.joins(:user_anon).where(branch_id: branch_id, enable: true).count

      if anon_count.zero?
        user_id = User.create!(branch_id: branch_id, name: 'anon')
        UserAnon.create(user_id: user_id)
      end
    end

    if @branch.branch_setting.user_type.id == 2
      point_setting = @branch.branch_setting.branch_setting_payments.find_by_payment_id(3)
      if point_setting
        point_setting.destroy
      end
    end
  end

  # Use callbacks to share common setup or constraints between actions.
  def set_branch
    @branch = Branch.find(params[:id])
  end

  # Only allow a list of trusted parameters through.
  def branch_params
    params.require(:branch).permit(:company_id, :title, :enable, branch_setting_attributes: [:locale, :use_unique_number, :use_product_category, :use_group, branch_setting_user_type_attributes: [:user_type_id], payment_ids: []], branch_picture_attributes: [:picture])
  end
end
