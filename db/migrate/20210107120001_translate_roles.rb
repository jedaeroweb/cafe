class TranslateRoles < ActiveRecord::Migration[6.0]
  def change
    reversible do |dir|
      dir.up do
        Role.create_translation_table!({ title: :string }, migrate_data: true)
        remove_column :roles, :title
      end

      dir.down do
        Role.drop_translation_table! migrate_data: true
      end
    end
  end
end
