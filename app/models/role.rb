class Role < ApplicationRecord
  translates :title
  validates_presence_of :title
  has_one :role_admin, dependent: :destroy
  has_one :admin, through: :role_admin, dependent: :destroy
end
