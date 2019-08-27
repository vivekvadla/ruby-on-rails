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
        @players = Player.all
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
        @name1 = @players.find(@score.player1_id).name 
        @name2 = @players.find(@score.player2_id).name 
        @id1 = @players.select(:id).find_by(name: @name1).id 
        @id2 = @players.select(:id).find_by(name: @name2).id 
        @sc1 = @players.find(@id1).score 
        @sc2 = @players.find(@id2).score 
        @st1 = @players.find(@id1).status 
        @st2 = @players.find(@id2).status 
    end
    def edit
        @score = Score.find(params[:id])
    end
   
    def update
        @score = Score.find(params[:id])
        if @score.update(score_params)
            redirect_to scores_path
        else
            render :edit
        end
    end


    private
    def score_params
        params.require(:score).permit(:winner,:status,:player1_id,:player2_id,:commit)
    end
end
