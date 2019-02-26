class Choice < ApplicationRecord
  belongs_to :event
  before_create :default_values
  def promote!
    self.status = 1 unless self.status
    if self.status < 3
      self.status += 1
      save
    end
  end
  private
  def default_values
    self.status = 1
  end
end
