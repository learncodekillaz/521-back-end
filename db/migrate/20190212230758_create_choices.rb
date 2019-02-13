class CreateChoices < ActiveRecord::Migration[5.2]
  def change
    create_table :choices do |t|
      t.integer :event_id
      t.string :choice_name
      t.integer :status

      t.timestamps
    end
  end
end
