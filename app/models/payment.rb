class Payment < ApplicationRecord
  translates :title
  has_many :branch_setting_payments
  has_many :orders, through: :order_payment
  has_many :branch_settings, through: :branch_setting_payments
end
