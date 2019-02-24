class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
  has_many :inviter_events, class_name: "Event", foreign_key: "inviter_id"
  has_many :invitee_events, class_name: "Event", foreign_key: "invitee_id"

end
