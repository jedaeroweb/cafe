class Point < ApplicationRecord
  belongs_to :user_point, counter_cache: true, dependent: :destroy
  has_many :users, through: :user_point

  accepts_nested_attributes_for :user_point
end
