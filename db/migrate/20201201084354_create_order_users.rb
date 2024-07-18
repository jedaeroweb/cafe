class CreateOrderUsers < ActiveRecord::Migration[6.0]
  def change
    create_table :order_users do |t|
      t.references :order, null: false
      t.references :user, null: false
      t.boolean :enable, null: false, default: true
    end
  end
end
