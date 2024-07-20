class Users::RegistrationsController < Devise::RegistrationsController
  def index
    @users = User.order('id desc').page(params[:page]).per(10)

    respond_to do |format|
      format.html # index.html.erb
      format.json { render :json => @notices }
    end
  end

  def show
    @users = User.order('id desc').page(params[:page]).per(10)

    respond_to do |format|
      format.html # index.html.erb
      format.json { render :json => @notices }
    end
  end

  # GET /resource/sign_up
  #  def new
  #    resource = build_resource({})
  #    respond_with resource
  #  end

  # POST /resource
  def create
    title='내가게'

    if params[:title].present?
      title=params[:title]
    end

    @company = Company.create!(title: title)
    @branch = Branch.create!(company_id: @company.id, title: '본점', branch_setting_attributes: { use_unique_number: true, branch_setting_user_type_attributes: { user_type_id: 1 }, branch_setting_payments_attributes: [{ payment_id: 1 }, { payment_id: 2 }] })

    ap=user_params.merge(branch_id: @branch.id)

    @user = User.new(ap)

    if Rails.env.production?
      result=verify_recaptcha(:model =>@user) && @user.save
    else
      result=@user.save!
    end

    @admin=Admin.create!(branch_id: @branch.id, name: title+' 관리자', role_admin_attributes: { role_id: 1 })
    UserAdmin.create!(user_id: @user.id, admin_id: @admin.id)

    @branch.branch_setting.user_id=@user.id
    @branch.branch_setting.save!

    session[:admin_id] = @admin.id

    if result
      if resource.active_for_authentication?
        set_flash_message :notice, :signed_up if is_navigational_format?
        sign_in(resource_name, resource)
        respond_with resource, :location => after_sign_up_path_for(resource)
      else
        set_flash_message :notice, :"signed_up_but_#{resource.inactive_message}" if is_navigational_format?
        expire_session_data_after_sign_in!
        respond_with resource, :location => after_inactive_sign_up_path_for(resource)
      end
    else
      clean_up_passwords resource
      respond_with resource
    end
  end

  def after_sign_up_path_for(resource)
    after_sign_in_path_for(resource)
  end

  # The path used after sign up for inactive accounts. You need to overwrite
  # this method in your own RegistrationsController.
  def after_inactive_sign_up_path_for(resource)
    respond_to?(:root_path) ? root_path : "/"
  end

  # The default url to be used after updating a resource. You need to overwrite
  # this method in your own RegistrationsController.
  def after_update_path_for(resource)
    signed_in_root_path(resource)
  end

  #def layout
  #  if params[:no_layout].present?
  #    return false
  #  else
  #    return 'user'
  #  end
  #end

  protected

  def user_params
    params.require(:user).permit( :name, :email, :password, :password_confirmation, :salt, :encrypted_password, user_picture_attributes: [:picture])
  end
end
