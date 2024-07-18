class OrderUser < ApplicationRecord
  validates_presence_of :order_id, :user_id
  belongs_to :order
  belongs_to :user
end
