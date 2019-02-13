class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
  has_many :events, class_name: "Event", foreign_key: "user_id"
  has_many :invited_events, class_name: "Event", foreign_key: "invitee_id"

end
