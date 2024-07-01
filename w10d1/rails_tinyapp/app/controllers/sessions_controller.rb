class SessionsController < ApplicationController
  def new
  end

  def create
    # Validate user info
    # store the user id in a cookie
    user_email = params[:email]
    user_password = params[:password]

    user = User.find_by_email(user_email)
    user_authenticated = user.authenticate(user_password) if user


    if user_authenticated
      session[:user_id] = user.id
      redirect_to root_path
    else
      redirect_to "/login"
    end
  end

  def destroy
    session[:user_id] = nil
    redirect_to root_path
  end
end
