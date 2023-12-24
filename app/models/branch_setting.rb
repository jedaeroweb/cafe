class BranchSetting < ApplicationRecord
  belongs_to :branch
  has_many :branch_setting_payments
  has_one :branch_setting_user_type
  has_many :payments, through: :branch_setting_payments
  has_one :user_type, through: :branch_setting_user_type
  validates :branch_setting_user_type, presence: true
  validates :branch_setting_payments, presence: true

  accepts_nested_attributes_for :branch_setting_user_type, allow_destroy: true
  accepts_nested_attributes_for :branch_setting_payments, allow_destroy: true
end
