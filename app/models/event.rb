class Event < ApplicationRecord
  belongs_to :inviter, class_name: "User"
  has_many :choices
  # validates_associated :choices
  belongs_to :invitee, class_name: "User"
  accepts_nested_attributes_for :choices
  before_create :default_values

  private
  def default_values
    self.five_choices = true
  end
end
