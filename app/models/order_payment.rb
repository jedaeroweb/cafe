class OrderPayment < ApplicationRecord
  validates_presence_of :order_id, :payment_id
  belongs_to :order
  belongs_to :payment
end
