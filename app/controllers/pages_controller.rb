class PagesController < ApplicationController
  before_action :authenticated_user!, only: :protected

  def unprected
  end

  def pretected
  end
end
