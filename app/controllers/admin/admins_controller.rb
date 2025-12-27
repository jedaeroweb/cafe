class Admin::AdminsController < Admin::AdminController
  load_and_authorize_resource
  before_action :set_admin, only: [:show, :edit, :update, :destroy]

  # GET /users
  # GET /users.json
  def index
    params[:per_page] = 10 unless params[:per_page].present?

    condition = { branch_id: session[:branch_id] }

    @admin_count = Admin.where(condition).count
    @admins = Admin.where(condition).page(params[:page]).per(params[:per_page]).order('id desc')
  end

  # GET /users/1
  # GET /users/1.json
  def show
  end

  # GET /users/new
  def new
    @admin = Admin.new
  end

  # GET /users/1/edit
  def edit
    @branch = Branch.where(id: session[:branch_id], enable: true).first
  end

  # POST /users
  # POST /users.json
  def create
    @admin = Admin.new(admin_params)

    respond_to do |format|
      if @admin.save
        format.html { redirect_to admin_admin_path(@admin), notice: 'admin was successfully created.' }
        format.json { render :show, status: :created, location: @admin }
      else
        format.html { render :new }
        format.json { render json: @admin.errors, status: :unprocessable_content }
      end
    end
  end

  # PATCH/PUT /users/1
  # PATCH/PUT /users/1.json
  def update
    respond_to do |format|
      if @admin.update(admin_params)
        format.html { redirect_to admin_admin_path(@admin), notice: 'admin was successfully updated.' }
        format.json { render :show, status: :ok, location: @admin }
      else
        format.html { render :edit }
        format.json { render json: @admin.errors, status: :unprocessable_content }
      end
    end
  end

  # DELETE /users/1
  # DELETE /users/1.json
  def destroy
    @admin.destroy
    respond_to do |format|
      format.html { redirect_to admin_admins_url, notice: 'admin was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_admin
    @admin = Admin.find(params[:id])
  end

  # Only allow a list of trusted parameters through.
  def admin_params
    params.require(:admin).permit(:name, :email, :enable)
  end
end
