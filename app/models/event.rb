class Event < ApplicationRecord
  belongs_to :user
  has_many :choices
  belongs_to :invitee, class_name: "User"
  accepts_nested_attributes_for :choices
end
