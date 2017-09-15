class User < ApplicationRecord
  # Include default devise modules.
  devise 	:database_authenticatable, 
  				:registerable,
          :recoverable, 
          :rememberable, 
          :trackable, 
          :validatable,
          :omniauthable

  include DeviseTokenAuth::Concerns::User

  class << self
    def list(user_type)
      users = if user_type.present? && ["developer", "manager"].include?(user_type.downcase)
                User.where(type: user_type.capitalize)
              else
                User.all
              end
      users.order("created_at DESC")          
    end
  end

  def manager?
  	(type == "Manager")
  end

  def developer?
  	(type == "Developer")
  end

end
