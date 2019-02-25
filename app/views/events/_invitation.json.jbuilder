json.extract! invitation, :id, :event_name, :invitee_id, :five_choices, :two_choices, :final_choice, :current_stage, :event_attend_inviter, :event_attend_invitee, :event_rating_inviter, :event_rating_invitee, :event_type, :cancel_type, :inviter_id, :created_at, :updated_at, :choices
json.url invited_url(invitation, format: :json)
