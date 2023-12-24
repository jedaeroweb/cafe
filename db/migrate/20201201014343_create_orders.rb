class CreateOrders < ActiveRecord::Migration[6.0]
  def change
    create_table :orders do |t|
      t.references :branch, null: false
      t.references :account_category, null: false, default: 1
      t.references :user
      t.date :transaction_date, null: false
      t.integer :price, null: false, default: 0
      t.integer :discount, null: false, default: 0
      t.integer :payment, null: false, default: 0
      t.boolean :enable, null: false, default: true
      t.timestamps null: false
    end
  end
end
