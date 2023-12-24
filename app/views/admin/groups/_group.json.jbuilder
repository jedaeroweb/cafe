json.extract! group, :id, :title, :description, :created_at, :updated_at
json.url admin_group_url(group, format: :json)
