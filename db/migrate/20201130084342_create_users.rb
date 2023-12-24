class CreateUsers < ActiveRecord::Migration[6.0]
  def change
    create_table :users do |t|
      t.references :branch, null: false
      t.string :name, null: false, limit: 60
      t.string :email, limit: 60
      t.string :phone, limit: 20
      t.date :birthday
      t.boolean :gender
      t.date :registration_date, null: false
      t.integer :orders_count, null: false, default: 0
      t.integer :accounts_count, null: false, default: 0
      t.boolean :enable, null: false, default: true
      t.timestamps null: false
    end

    add_index :users, :email, unique: true
    add_index :users, [:branch_id, :phone], unique: true
  end
end
