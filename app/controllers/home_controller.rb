class HomeController < ApplicationController
  load_and_authorize_resource

  def index
  end

  def no_auth

  end
end