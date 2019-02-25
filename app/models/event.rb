class Event < ApplicationRecord
  belongs_to :inviter, class_name: "User"
  belongs_to :invitee, class_name: "User"
  has_many :choices
  accepts_nested_attributes_for :choices
  # validates_associated :choices
  # define_model_callbacks :create, :update
  # def create
  #   run_callbacks :create do
  #
  #   end
  # end
  # Specifies that the method below is to be executed before creation of new record.
  before_create :default_values
  # Is it necessary to include "extend ActiveModel::Callbacks" with new version of Rails? Seems to work fine without it.
  private
  # Sets five_choices value to true upon creation.
  def default_values
    self.five_choices = true
    self.two_choices = false
    self.final_choice = false
    self.current_stage = "five_choices"
  end

  # def update_to_2_choices
  #   if current_user == invitee_id
  #
  # end
end
