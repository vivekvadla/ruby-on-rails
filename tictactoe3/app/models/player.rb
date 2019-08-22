class Player < ApplicationRecord    
        validates :name, presence: true,
        length: { minimum: 3, maximum: 25 },
        uniqueness: true 
        validates :status, presence: true 
        scope :active, -> { where(status: "Active")}
        has_many :scores_as_player1, class="Score"
        has_many :scores_as_player2, class="Score"
end
