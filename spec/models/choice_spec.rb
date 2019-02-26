require 'rails_helper'


# RSpec.describe Choice, type: :model do
#   pending "add some examples to (or delete) #{__FILE__}"
# end

describe "Choice" do
  let(:user){User.create(email: "hello1@gmail.com", password:"hello1")}
  let(:event){Event.create inviter: user, invitee: user}
  it "has to be real" do
    expect{Choice.new}.to_not raise_error
  end

  it "should set default value of status to 1." do
    choice = Choice.create event:event
    expect(choice.status).to eq(1)
  end

  it "should be promotable" do
    choice = Choice.create event:event
    choice.promote!
    choice.reload
    expect(choice.status).to eq(2)
  end

  it "should be promotable to be a selected choice" do
    choice = Choice.create event:event
    2.times do
      choice.promote!
    end
    choice.reload
    expect(choice.status).to eq(3)
  end

  it "shouldn't be promoted past being selected." do
    choice = Choice.create event:event
    3.times do
      choice.promote!
    end
    choice.reload
    expect(choice.status).to eq(3)
  end

  it "should be promotable if it begins with nil value" do
    choice = Choice.create event:event
    choice.update_attribute :status, nil
    choice.promote!
    choice.reload
    expect(choice.status).to eq(2)
  end
end
