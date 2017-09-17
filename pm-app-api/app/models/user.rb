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

  # checks if user is a manager
  def manager?
  	(type == "Manager")
  end

  # checks if user is a developer
  def developer?
  	(type == "Developer")
  end

  # Returns list of todos of a user (manager/ developer)
  def todo_list
    Todo.list(developer_id: id)
  end

end
