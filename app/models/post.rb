class Post < ApplicationRecord
    belongs_to :user
    has_one_attached :photo

    validates :title, :description, presence: true
    validates :photo, attached: true
end
