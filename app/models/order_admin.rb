class OrderAdmin < ApplicationRecord
  validates_presence_of :order_id, :admin_id
  belongs_to :order
  belongs_to :admin
end
