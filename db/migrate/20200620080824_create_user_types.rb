class CreateUserTypes < ActiveRecord::Migration[6.0]
  def change
    create_table :user_types do |t|
      t.string :title, null: false, limit: 60
      t.boolean :enable, null: false, default: true
      t.timestamps null: false
    end
  end
end
