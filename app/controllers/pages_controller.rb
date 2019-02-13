class PagesController < ApplicationController
  before_action :authenticate_user!, only: :protected
  before_action :authenticate_user!, except: :unprotected  

  def unprotected
  end

  def protected
  end
end
