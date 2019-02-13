json.extract! event, :id, :event_name, :invitee_id, :five_choices, :two_choices, :final_choice, :current_stage, :event_attend_inviter, :event_attend_invitee, :event_rating_inviter, :event_rating_invitee, :event_type, :cancel_type, :user_id, :created_at, :updated_at
json.url event_url(event, format: :json)
