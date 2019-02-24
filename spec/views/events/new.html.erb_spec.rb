require 'rails_helper'

RSpec.describe "events/new", type: :view do
  before(:each) do
    assign(:event, Event.new(
      :event_name => "MyString",
      :invitee_id => 1,
      :five_choices => false,
      :two_choices => false,
      :final_choice => false,
      :current_stage => "MyString",
      :event_attend_inviter => "MyString",
      :event_attend_invitee => "MyString",
      :event_rating_inviter => 1,
      :event_rating_invitee => 1,
      :event_type => "MyString",
      :cancel_type => "MyString",
      :inviter_id => 1
    ))
  end

  it "renders new event form" do
    render

    assert_select "form[action=?][method=?]", events_path, "post" do

      assert_select "input[name=?]", "event[event_name]"

      assert_select "input[name=?]", "event[invitee_id]"

      assert_select "input[name=?]", "event[five_choices]"

      assert_select "input[name=?]", "event[two_choices]"

      assert_select "input[name=?]", "event[final_choice]"

      assert_select "input[name=?]", "event[current_stage]"

      assert_select "input[name=?]", "event[event_attend_inviter]"

      assert_select "input[name=?]", "event[event_attend_invitee]"

      assert_select "input[name=?]", "event[event_rating_inviter]"

      assert_select "input[name=?]", "event[event_rating_invitee]"

      assert_select "input[name=?]", "event[event_type]"

      assert_select "input[name=?]", "event[cancel_type]"

      assert_select "input[name=?]", "event[inviter_id]"
    end
  end
end
