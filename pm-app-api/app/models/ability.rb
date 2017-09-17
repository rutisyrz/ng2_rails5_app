class Ability
  include CanCan::Ability

  def initialize(user)
    @user = user || User.new     
    send(@user.type.downcase) if @user.type.present?
  end

  def manager
    can :manage, :all
  end

  def developer
    # should be able to see a todo list for him.
    # should be able to mark is 'in progress' or 'Done'
    can :update, Todo, user_id: @user.id
    can :read, Todo
    can :read, Project
    can :todos, User
  end

  # See the wiki for details:
  # https://github.com/CanCanCommunity/cancancan/wiki/Defining-Abilities

end
