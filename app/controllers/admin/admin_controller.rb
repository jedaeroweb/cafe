class Admin::AdminController < ApplicationController
  load_and_authorize_resource
  before_action :set_branch_setting
  helper_method :current_admin

  def current_admin
    Admin.find(session[:admin_id])
  rescue
    nil
  end

  def current_ability
    unless session[:admin_id]
      return AdminAbility.new(nil)
    end

    return @current_ability ||= AdminAbility.new(Admin.find(session[:admin_id]))
  end

  def resource_name
    :user
  end

  def resource
    @resource ||= User.new
  end

  def devise_mapping
    @devise_mapping ||= Devise.mappings[:admin]
  end

  rescue_from CanCan::AccessDenied do |_exception|
    if current_admin
      render file: "#{Rails.root}/public/403.html", status: 403, layout: false
    else
      redirect_to new_user_session_path
    end
  end

  def layout
    if params[:no_layout]
      false
    else
      if params[:popup]
        'admin/popup'
      else
        'admin/application'
      end
    end
  end
end
