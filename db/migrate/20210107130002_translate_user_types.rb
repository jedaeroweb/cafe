class TranslateUserTypes < ActiveRecord::Migration[6.0]
  def change
    reversible do |dir|
      dir.up do
        UserType.create_translation_table!({ title: :string }, migrate_data: true)
        remove_column :user_types, :title
      end

      dir.down do
        UserType.drop_translation_table! migrate_data: true
      end
    end
  end
end
