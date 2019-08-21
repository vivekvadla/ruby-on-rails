class Player < ApplicationRecord    
        validates :name, presence: true,
        length: { minimum: 3, maximum: 25 },
        uniqueness: true 
        validates :status, presence: true 
        scope :active, -> { where(status: "Active")}
end
