require 'rails_helper'

RSpec.describe "events/show", type: :view do
  before(:each) do
    @event = assign(:event, Event.create!(
      :event_name => "Event Name",
      :invitee_id => 2,
      :five_choices => false,
      :two_choices => false,
      :final_choice => false,
      :current_stage => "Current Stage",
      :event_attend_inviter => "Event Attend Inviter",
      :event_attend_invitee => "Event Attend Invitee",
      :event_rating_inviter => 3,
      :event_rating_invitee => 4,
      :event_type => "Event Type",
      :cancel_type => "Cancel Type",
      :inviter_id => 5
    ))
  end

  it "renders attributes in <p>" do
    render
    expect(rendered).to match(/Event Name/)
    expect(rendered).to match(/2/)
    expect(rendered).to match(/false/)
    expect(rendered).to match(/false/)
    expect(rendered).to match(/false/)
    expect(rendered).to match(/Current Stage/)
    expect(rendered).to match(/Event Attend Inviter/)
    expect(rendered).to match(/Event Attend Invitee/)
    expect(rendered).to match(/3/)
    expect(rendered).to match(/4/)
    expect(rendered).to match(/Event Type/)
    expect(rendered).to match(/Cancel Type/)
    expect(rendered).to match(/5/)
  end
end
