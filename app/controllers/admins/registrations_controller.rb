class Admins::RegistrationsController < Devise::RegistrationsController
  layout 'admin/login'
  # GET /admins
  # GET /admins.json
  def index
    @admins = Admin.where('parent_id is null').order('id desc').page(params[:page]).per(10)

    respond_to do |format|
      format.html # index.html.erb
      format.json { render :json => @admins }
    end
  end

  def new
    @admin = Admin.new
    @admin.build_admin_picture
  end

  def edit
    @branch = Branch.where(:id=>current_admin.branch_id, :enable=>1).first
  end

  def layout
    if(['edit','update'].include?(params[:action]))
      return 'application'
    else
      return 'admin/application'
    end
  end

  # POST /users
  # POST /users.json
  def create
    begin
      @company = Company.create!(title: params[:title])
      @branch = Branch.create!(company_id: @company.id, title: '본점')
      @branch_setting = BranchSetting.create!(branch_id: @branch.id, locale: 'ko', use_group: true, use_unique_number: true, use_product_category: true, branch_setting_user_type_attributes: { user_type_id: 3 }, branch_setting_payments_attributes: [{ payment_id: 1 }, { payment_id: 2 }, { payment_id: 3 }, { payment_id: 4 }])


      #if(params[:picture])
      #  CompanyPicture.create!(company_id: @company.id,picture: )
      #end

      ap=admin_params.merge(branch_id: @branch.id)

      @admin = Admin.new(ap)

      if Rails.env.production?
        result=verify_recaptcha(:model => @admin) && @admin.save
      else
        result=@admin.save
      end

      if result
        @admin.add_role_admin
      end

      respond_to do |format|
        if result
          format.html { redirect_to new_admin_session_path, :notice => t(:message_success_insert)}
          format.json { render :json => @admin, :status => :created, :location => @admin }
        else
          format.html { render :action => "new" }
          format.json { render :json => @admin.errors, :status => :unprocessable_entity }
        end
      end

    rescue ActiveRecord::RecordInvalid => exception
      flash[:alert]=exception.message
      redirect_to new_admin_registration_path
    end
  end

  def admin_params
    params.require(:admin).permit( :name, :email, :password, :salt, :encrypted_password, admin_picture_attributes: [:picture])
  end
end