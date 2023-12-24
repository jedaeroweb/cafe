class UserType < ApplicationRecord
  translates :title
  has_one :branch_setting_user_type
end
