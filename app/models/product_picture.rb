class ProductPicture < ApplicationRecord
  belongs_to :product, counter_cache: true
  mount_uploader :picture, ProductPictureUploader
end
