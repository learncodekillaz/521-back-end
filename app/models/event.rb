class Event < ApplicationRecord
  belongs_to :inviter, class_name: "User"
  has_many :choices
  # validates_associated :choices
  belongs_to :invitee, class_name: "User"
  accepts_nested_attributes_for :choices
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
    self.current_stage = "five_choices"
  end
  
end
