require 'rails_helper'

RSpec.describe "events/index", type: :view do
  before(:each) do
    assign(:events, [
      Event.create!(
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
        :user_id => 5
      ),
      Event.create!(
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
        :user_id => 5
      )
    ])
  end

  it "renders a list of events" do
    render
    assert_select "tr>td", :text => "Event Name".to_s, :count => 2
    assert_select "tr>td", :text => 2.to_s, :count => 2
    assert_select "tr>td", :text => false.to_s, :count => 2
    assert_select "tr>td", :text => false.to_s, :count => 2
    assert_select "tr>td", :text => false.to_s, :count => 2
    assert_select "tr>td", :text => "Current Stage".to_s, :count => 2
    assert_select "tr>td", :text => "Event Attend Inviter".to_s, :count => 2
    assert_select "tr>td", :text => "Event Attend Invitee".to_s, :count => 2
    assert_select "tr>td", :text => 3.to_s, :count => 2
    assert_select "tr>td", :text => 4.to_s, :count => 2
    assert_select "tr>td", :text => "Event Type".to_s, :count => 2
    assert_select "tr>td", :text => "Cancel Type".to_s, :count => 2
    assert_select "tr>td", :text => 5.to_s, :count => 2
  end
end
