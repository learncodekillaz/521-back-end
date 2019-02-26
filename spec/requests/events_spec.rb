require 'rails_helper'

describe "Event", type: :request do
  let(:user){User.create(email: "hello1@gmail.com", password:"hello1")}
  let(:event){Event.create inviter: user, invitee: user}
  it "Updates an event" do
    update_params = {event:{current_stage:"two_choices"}}
    headers = {
      "ACCEPT" => "application/json"
    }
    sign_in user
    put "/events/#{event.id}", params: update_params, headers: headers
    event.reload
    expect(event.current_stage).to eq "two_choices"
  end
end
