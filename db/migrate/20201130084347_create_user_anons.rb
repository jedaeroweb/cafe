class CreateUserAnons < ActiveRecord::Migration[6.0]
  def change
    create_table :user_anons do |t|
      t.references :user, null: false
      t.timestamps null: false
    end
  end
end
