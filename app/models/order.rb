class Order < ApplicationRecord
  after_initialize :default_values

  validates_presence_of :user_id, :transaction_date, :price, :discount, :payment
  belongs_to :branch, counter_cache: true
  belongs_to :user, counter_cache: true
  has_many :order_payments
  has_many :payments, through: :order_payments
  has_many :order_products, dependent: :destroy
  has_many :products, through: :order_products
  validates :order_products, presence: true
  accepts_nested_attributes_for :order_products, allow_destroy: true

  private

  def default_values
    self.transaction_date ||= Date.today
  end
end
