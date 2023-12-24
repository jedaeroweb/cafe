json.extract! account, :id, :title, :created_at, :updated_at
json.url admin_account_url(account, format: :json)
