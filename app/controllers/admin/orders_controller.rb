class Admin::OrdersController < Admin::AdminController
  before_action :set_order, only: [:show, :edit, :update, :destroy]

  # GET /orders
  # GET /orders.json
  def index
    params[:per_page] = 10 unless params[:per_page].present?

    condition = { branch_id: session[:branch_id], enable: true }
    condition_sql = '1=1'
    sql_params = []

    if params[:start_date].present?
      condition_sql += " AND transaction_date>=?"
      sql_params << params[:start_date].to_date
    end

    if params[:end_date].present?
      condition_sql += " AND transaction_date<=?"
      sql_params << params[:end_date].to_date
    end

    @order_count = Order.where(condition).where(condition_sql, *sql_params).count
    @orders = Order.where(condition).where(condition_sql, *sql_params).page(params[:page]).per(params[:per_page]).order('id desc')
  end

  # GET /orders/1
  # GET /orders/1.json
  def show
  end

  # GET /orders/new
  def new
    params[:per_page] = 10 unless params[:per_page].present?

    @order = Order.new
    @order.order_products.build

    condition = { branch_id: session[:branch_id], enable: true }

    if @current_branch_setting.use_product_category
      @product_categories = ProductCategory.where(condition)

      if params[:product_category_id]
        @product_category = ProductCategory.find(params[:product_category_id])
      else
        unless @product_categories.empty?
          @product_category = @product_categories.first
        end
      end
    end

    @user_counts = 0

    like = false

    if params[:search_field].present? and params[:search_word].present?
      case params[:search_field]
      when 'name'
        condition_sql = 'name like ?'
        like = true
      when 'phone'
        condition_sql = 'phone like ?'
        like = true
      when 'unique_number'
        condition_sql = 'user_unique_numbers.unique_number like ?'
        like = true
      end
    end

    if like
      @user_count = User.includes(:user_unique_number).where(condition).where(condition_sql, '%' + params[:search_word].strip + '%').count
      @users = User.includes(:user_unique_number).where(condition).where(condition_sql, '%' + params[:search_word].strip + '%').page(params[:page]).per(params[:per_page]).order('id desc')
    else
      @user_count = User.includes(:user_unique_number).where(condition).count
      @users = User.includes(:user_unique_number).where(condition).page(params[:page]).per(params[:per_page]).order('id desc')
    end

    if @user_counts == 1
      @user = @users[0]
    end

    if @current_branch_setting.use_product_category
      if @product_category.present?
        condition[:product_category_id] = @product_category.id
      else
        condition[:product_category_id] = nil
      end
    end

    @products = Product.where(condition).order('id desc').page(params[:page]).per(params[:per_page])

    @payment_count = Payment.joins(:branch_setting_payments).where({ :branch_setting_payments => { branch_setting_id: @current_branch_setting, enable: true }, enable: true }).count
    @payments = Payment.joins(:branch_setting_payments).where({ :branch_setting_payments => { branch_setting_id: @current_branch_setting, enable: true }, enable: true })
  end

  # GET /orders/1/edit
  def edit
  end

  # POST /orders
  # POST /orders.json
  def create
    result = false

    begin

      @order = Order.new(order_params)
      @order.save!

      OrderAdmin.create!(:order_id => @order.id, :admin_id => current_admin.id)

      ca = calculate_account(@order.order_products, params[:payment_method])
      OrderPayment.create!(:order_id => @order.id, :payment_id => params[:payment_method])
      @order.update(price: ca[:total_price], payment: ca[:total_price])
      result = true

      respond_to do |format|
        if result
          format.html { redirect_to new_admin_order_path, notice: 'Order was successfully created.' }
          format.json { render :show, status: :created, location: @order }
        else
          format.html { render :new }
          format.json { render json: @order.errors, status: :unprocessable_content }
        end
      end

    rescue ActiveRecord::RecordInvalid => exception
      flash[:alert] = exception.message
      redirect_to new_admin_order_path
    end
  end

  # PATCH/PUT /orders/1
  # PATCH/PUT /orders/1.json
  def update
    respond_to do |format|
      if @order.update(order_params)
        format.html { redirect_to new_admin_order_path, notice: 'Order was successfully updated.' }
        format.json { render :show, status: :ok, location: @order }
      else
        format.html { render :edit }
        format.json { render json: @order.errors, status: :unprocessable_content }
      end
    end
  end

  # DELETE /orders/1
  # DELETE /orders/1.json
  def destroy
    @order.destroy
    respond_to do |format|
      format.html { redirect_to admin_orders_url, notice: 'Order was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private

  def calculate_account(s, payment_method)
    a = { total_price: 0 }
    if s.empty?
      return a
    end

    s.each do |ss|
      pp = ss.price * ss.quantity

      a[:total_price] += pp
    end

    return a
  end

  # Use callbacks to share common setup or constraints between actions.
  def set_order
    @order = Order.find(params[:id])
  end

  # Only allow a list of trusted parameters through.
  def order_params
    params.require(:order).permit(:user_id, :transaction_date, :price, :discount, :payment, order_products_attributes: [:product_id, :price, :quantity]).merge(branch_id: session[:branch_id])
  end
end
