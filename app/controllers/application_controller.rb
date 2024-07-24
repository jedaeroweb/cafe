class ApplicationController < ActionController::Base
  layout :layout

  before_action :set_title
  before_action :set_locale
  before_action :set_branch_setting
  before_action :configure_permitted_parameters, if: :devise_controller?

  def set_title
    if user_signed_in?
        @branch=Branch.find(current_user.branch_id)
        @title=@branch.title
    else
      @title=t(:title)
    end
  end

  def current_ability
    @current_ability ||= UserAbility.new(current_user)
  end

  rescue_from CanCan::AccessDenied do |exception|
    session["user_return_to"] = request.fullpath
    redirect_to new_user_session_path, :notice => t(:login_first)
  end

  def set_locale
    I18n.locale = params[:locale] || session[:locale] || I18n.default_locale
    session[:locale] = I18n.locale
  end

  def layout
    if(params[:no_layout])
      return nil
    else
      return 'application'
    end
  end


  protected

  def set_branch_setting
    unless current_user
      return false
    end

    @current_branch = Branch.where(id: current_user.branch_id, enable: true).first
    @current_branch_setting = BranchSetting.where(branch_id: @current_branch, enable: true).first

    @use_point = false

    unless @current_branch_setting.user_type.id == 2
      @current_branch_setting.payments.each do |payment|
        if payment.id == 3
          @use_point = true
        end
      end
    end
  end

  def configure_permitted_parameters
    devise_parameter_sanitizer.permit(:sign_up) { |u| u.permit(:login_id, :password,
                                                               :password_confirmation, :remember_me, :photo, :photo_cache, :remove_photo).except(:roles_admin__attributes) }
    devise_parameter_sanitizer.permit(:account_update) { |u| u.permit(:login_id, :password,
                                                                      :password_confirmation, :current_password, :photo, :photo_cache, :remove_photor) }
  end
end
