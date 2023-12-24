class CreateBranchSettings < ActiveRecord::Migration[6.0]
  def change
    create_table :branch_settings do |t|
      t.references :branch, null: false
      t.string :locale, null: false, limit: 10, default: I18n.default_locale
      t.boolean :use_group, null: false, default: true
      t.boolean :use_unique_number, null: false, default: true
      t.boolean :use_product_category, null: false, default: true
      t.boolean :enable, null: false, default: true
      t.timestamps null: false
    end
  end
end
