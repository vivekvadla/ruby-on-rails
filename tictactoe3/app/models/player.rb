class Player < ApplicationRecord    
        validates :name, presence: true,
        length: { minimum: 3, maximum: 25 },
        uniqueness: true 
        validates :status, presence: true 
        scope :active, -> { where(status: "Active")}
        has_many :scores1, class_name:"Score", foreign_key:"player1_id" , dependent: :destroy
        has_many :scores2, class_name:"Score", foreign_key:"player2_id" , dependent: :destroy

end
