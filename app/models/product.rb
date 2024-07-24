class Product < ApplicationRecord
  translates :title

  has_rich_text :content
  validates_presence_of :title, :price
  belongs_to :branch, counter_cache: true
  belongs_to :product_category, counter_cache: true, optional: true
  has_many :order_products
  has_many :orders, through: :order_products
  has_many :account_products, dependent: :nullify
  has_many :product_pictures, dependent: :destroy
  accepts_nested_attributes_for :product_pictures, allow_destroy: true
end
