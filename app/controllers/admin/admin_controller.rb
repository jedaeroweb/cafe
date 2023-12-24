class Admin::AdminController < ApplicationController
  #load_and_authorize_resource except: [:create]
  load_and_authorize_resource
  before_action :set_branch_setting

  def current_ability
    @current_ability ||= AdminAbility.new(current_admin)
  end

  def resource_name
    :admin
  end

  def resource
    @resource ||= Admin.new
  end

  def devise_mapping
    @devise_mapping ||= Devise.mappings[:admin]
  end

  rescue_from CanCan::AccessDenied do |_exception|
    if current_admin
      render file: "#{Rails.root}/public/403.html", status: 403, layout: false
    else
      redirect_to new_admin_session_path
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

  protected

  def set_branch_setting
    @current_branch = Branch.where(id: session[:branch_id], enable: true).first
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
end
