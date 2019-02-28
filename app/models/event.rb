class Event < ApplicationRecord
  belongs_to :inviter, class_name: "User"
  belongs_to :invitee, class_name: "User"
  has_many :choices
  accepts_nested_attributes_for :choices
  # Specifies that the method below is to be executed before creation of new record.
  before_create :default_values
  private
  # Sets five_choices value to true upon creation.
  def default_values
    self.five_choices = true
    self.two_choices = false
    self.final_choice = false
    self.current_stage = "five_choices"
  end
end
