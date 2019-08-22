class Score < ApplicationRecord
    belongs_to :player1, class="Player", dependent: :destroy
    belongs_to :player2, class="Player", dependent: :destroy
end
