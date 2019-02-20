class AddNewColumnToChoices < ActiveRecord::Migration[5.2]
  def change
    add_column :choices, :url, :string
    add_column :choices, :movie_id, :integer
    add_column :choices, :overview, :text
  end
end
