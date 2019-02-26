require 'rails_helper'

describe "Event", type: :request do
  let(:user){User.create(email: "hello1@gmail.com", password:"hello1")}
  let(:event){Event.create inviter: user, invitee: user}
  let(:headers){ {"ACCEPT" => "application/json"} }
  let(:update_params){ {event:{current_stage:"two_choices"}}}
  it "Updates an event" do
    sign_in user
    put "/events/#{event.id}", params: update_params, headers: headers
    event.reload
    expect(event.current_stage).to eq "two_choices"
  end
  it "updates choices for an event." do
    choice1 = event.choices.create
    choice2 = event.choices.create
    choice3 = event.choices.create
    update_params[:choices] = [choice1.id, choice2.id]
    sign_in user
    put "/events/#{event.id}", params: update_params, headers: headers
    choice1.reload
    choice2.reload
    choice3.reload
    expect(choice1.status).to eq 2
    expect(choice2.status).to eq 2
    expect(choice3.status).to eq 1
  end
end
