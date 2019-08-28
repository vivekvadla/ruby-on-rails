class PlayersController < ApplicationController
    def index
         @players = Player.active.order('lower(name)')
        @winner = Player.order('score DESC').take(3)
        @player = @players
        @player = @player - @winner
        @player = @winner + @player
        @playerdis = Kaminari.paginate_array(@player).page(params[:page]).per(5)
        @avatar = Avatar.all
    end

    def new
        @player = Player.new
        @player.build_avatar
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
        if @player.update(player_params)
           if params[:commit] == 'save'
             redirect_to players_path
           end
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
        params.require(:player).permit(:name,:status,:score,:commit,avatar_attributes: [:image])
    end
    
end
