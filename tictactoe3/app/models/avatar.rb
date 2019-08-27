class Avatar < ApplicationRecord
    validates :image, presence: true
    belongs_to :player
    mount_uploader :image, ImageUploader
        validates_integrity_of :image
end
