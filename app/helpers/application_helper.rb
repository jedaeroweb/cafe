module ApplicationHelper
  def list_param(lparam)
    lparam[:controller] = nil
    lparam[:action] = nil
    lparam[:id] = nil

    return lparam
  end

  def show_param(lparam)
    return lparam
  end

  def link_to_home
    link_to('홈', root_path, :title => '홈으로')
  end

  def actionNameChange(action_name)
    case action_name
    when 'index'
      return t(:action_index)
    when 'new'
      return t(:action_new)
    when 'edit'
      return t(:action_edit)
    when 'show'
      return t(:action_show)
    else
    end
  end

  def current_controller(aa)
    if aa.include?(params[:controller])
      return 'class="current"'
    end
  end

  def display_use_trans(use)
    if use
      return t(:use)
    else
      return t(:not_use)
    end
  end

  def manage_width(model)
    if can?(:delete, model) and can?(:update, model)
      return ' style=width:170px;'
    else
      return ' style=width:90px'
    end
  end

  def display_payment_method(accounts)
    payment_method = []

    accounts.each do |account|
      unless account.cash.zero?
        payment_method.push(t(:cash));
      end

      unless account.credit.zero?
        payment_method.push(t(:credit));
      end

      unless account.point.zero?
        payment_method.push(t(:point));
      end
    end

    return payment_method.uniq.join(',')
  end

  def get_dt_format(date)
    return I18n.l date.to_date
  end

  def user_search_type_check(type, default = false)
    if default
      match = true
    else
      match = false
    end

    if params[:search_field].present?
      if params[:search_field] == type
        match = true
      else
        match = false
      end
    end

    if match
      return 'checked="checked"'
    else
      return ''
    end
  end
end
