class ProductCategory < ApplicationRecord
  translates :title
  validates_presence_of :branch_id, :title
  belongs_to :branch, counter_cache: true
  has_many :products, dependent: :destroy
end
