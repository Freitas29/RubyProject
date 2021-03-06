class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable 

  has_many :posts
  
  validates :name, presence: true
  
   def is_admin
    self.kind == "admin" ? true : false
  end
end
