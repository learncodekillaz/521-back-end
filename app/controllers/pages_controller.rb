class PagesController < ApplicationController
  before_action :authenticated_user!, only: :protected
  before_action :authenticated_user!, except: :unprotected  

  def unprotected
  end

  def protected
  end
end
