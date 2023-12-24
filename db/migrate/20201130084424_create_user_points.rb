class CreateUserPoints < ActiveRecord::Migration[6.0]
  def change
    create_table :user_points do |t|
      t.references :user, null: false
      t.integer :point, null: false, default: 0
      t.integer :points_count, null: false, default: 0
      t.boolean :enable, null: false, default: true
      t.timestamps null: false
    end
  end
end
