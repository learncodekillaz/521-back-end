class UsersController < ApplicationController
  def index
    @users = User.all
    render json: @users
  end

  def inviter
    @user = User.where(id: current_user)
    render json: @user
  end

  def show
  end
end
