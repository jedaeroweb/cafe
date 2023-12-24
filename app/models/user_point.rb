class UserPoint < ApplicationRecord
  belongs_to :user
  has_many :points, dependent: :destroy
end
