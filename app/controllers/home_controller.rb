class HomeController < ApplicationController
  before_action :authenticate_user!, except: [:index]

  def index

  end
  
  def no_auth
  
  end
end