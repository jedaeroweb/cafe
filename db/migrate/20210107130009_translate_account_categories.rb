class TranslateAccountCategories < ActiveRecord::Migration[6.0]
  def change
    reversible do |dir|
      dir.up do
        AccountCategory.create_translation_table!({ title: :string }, migrate_data: true)
        remove_column :account_categories, :title
      end

      dir.down do
        AccountCategory.drop_translation_table! migrate_data: true
      end
    end
  end
end
