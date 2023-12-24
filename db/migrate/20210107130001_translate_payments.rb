class TranslatePayments < ActiveRecord::Migration[6.0]
  def change
    reversible do |dir|
      dir.up do
        Payment.create_translation_table!({ title: :string }, migrate_data: true)
        remove_column :payments, :title
      end

      dir.down do
        Payment.drop_translation_table! migrate_data: true
      end
    end
  end
end
