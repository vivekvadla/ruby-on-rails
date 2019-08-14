class WelcomeController < ApplicationController
  def index
  end
  
  def new
    @player = Player.new
  end
end
