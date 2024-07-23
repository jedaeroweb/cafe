class ProductsController < ApplicationController
  layout :layout

  before_action :set_product, only: [:show]
  # GET /Products
  # GET /Products.json
  def index
    params[:per_page] = 10 unless params[:per_page].present?

    condition = { branch_id: current_user[:branch_id] }

    if @current_branch_setting.use_product_category
      @product_categories = ProductCategory.where(condition)

      if params[:product_category_id]
        @product_category = ProductCategory.find(params[:product_category_id])
      else
        unless @product_categories.empty?
          @product_category = @product_categories.first
        end
      end

      if @product_category.present?
        condition[:product_category_id] = @product_category.id
      end
    end

    @product_count = Product.where(condition).count
    @products = Product.where(condition).page(params[:page]).per(params[:per_page]).order('id desc')
  end

  # GET /Products/1
  # GET /Products/1.json
  def show
  end


  def layout
    if params[:no_layout]
      false
    else
      if params[:popup]
        'popup'
      else
        'application'
      end
    end
  end

  def set_product
    @product = Product.find(params[:id])
  end

end
