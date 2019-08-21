class PlayersController < ApplicationController
    def index
        @players = Player.order('lower(name)').all
    end

    def new
        @player = Player.new
    end

    def create
        @player = Player.new(player_params)
        if @player.save  
            redirect_to players_path
        else
            render :new
        end
    end

    def edit
        @player = Player.find(params[:id])
    end

    def update
        @player = Player.find(params[:id])
        if params[:commit] == 'save'
            @player.update(player_params)
            redirect_to players_path
        else
            render :edit
        end
    end

    def destroy
        @player = Player.find(params[:id])
        @player.destroy
        redirect_to players_path
    end

    private
    def player_params
        params.require(:player).permit(:name,:status,:commit)
    end
    
end
