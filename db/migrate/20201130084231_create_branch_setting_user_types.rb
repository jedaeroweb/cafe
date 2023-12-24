class CreateBranchSettingUserTypes < ActiveRecord::Migration[6.0]
  def change
    create_table :branch_setting_user_types do |t|
      t.references :branch_setting, null: false
      t.references :user_type, null: false
      t.boolean :enable, null: false, default: true
      t.timestamps null: false
    end
  end
end
