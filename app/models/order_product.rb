class OrderProduct < ApplicationRecord
  validates_presence_of :product_id
  belongs_to :order
  belongs_to :product
end
