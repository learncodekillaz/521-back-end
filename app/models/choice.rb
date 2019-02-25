class Choice < ApplicationRecord
  belongs_to :event
  before_create :default_values
  private
  def default_values
    self.status = 1
  end
end
