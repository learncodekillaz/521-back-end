class ChangeColumnEventUserIdToInviteeId < ActiveRecord::Migration[5.2]
  def change
    rename_column :events, :user_id, :inviter_id
  end
end
