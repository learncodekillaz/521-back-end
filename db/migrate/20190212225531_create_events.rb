class CreateEvents < ActiveRecord::Migration[5.2]
  def change
    create_table :events do |t|
      t.string :event_name
      t.integer :invitee_id
      t.boolean :five_choices
      t.boolean :two_choices
      t.boolean :final_choice
      t.string :current_stage
      t.string :event_attend_inviter
      t.string :event_attend_invitee
      t.integer :event_rating_inviter
      t.integer :event_rating_invitee
      t.string :event_type
      t.string :cancel_type
      t.integer :user_id

      t.timestamps
    end
  end
end
