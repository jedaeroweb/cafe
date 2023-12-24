class BranchSettingUserType < ApplicationRecord
  belongs_to :branch_setting
  belongs_to :user_type
end
