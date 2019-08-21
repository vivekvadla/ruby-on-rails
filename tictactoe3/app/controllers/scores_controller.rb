class ScoresController < ApplicationController
    def index
        @scores = Score.all
        @players = Player.all
        @score = Score.new
    end

    def new
        @score = Score.new
        @players = Player.all
    end

    def create
        @score = Score.new(score_params)
        if @score.save  
            redirect_to @score
        else
            render :new
        end
    end
    def show
        @score = Score.find(params[:id])
        @players = Player.all
    end
    def edit
        @score = Score.find(params[:id])
    end
    def det_update
        @score = Score.find(params[:id])
        
    end
    def update
        @score = Score.find(params[:id])
        if params[:commit] == 'save'
            @score.update(score_params)
            redirect_to players_path
        else
            render :edit
        end
    end

    def destroy
        @score = Score.find(params[:id])
        @score.destroy
        redirect_to players_path
    end

    private
    def score_params
        params.require(:score).permit(:player1,:player2,:winner,:status,:commit)
    end
end
