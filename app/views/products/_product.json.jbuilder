json.extract! product, :id, :title, :price, :product_pictures_count, :product_pictures, :created_at, :updated_at
json.url product_url(product, format: :json)
