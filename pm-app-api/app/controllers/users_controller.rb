class UsersController < ApplicationController
  before_action :authenticate_user!
  
  # GET /users
  def index
    @users = User.list(params[:user_type])
    render json: @users
  end

	# GET /users/1
  def show
  	
  end

  # GET /users/1/todos
  #
  # Daveloper can view only his/her assigned todos
  # Manager can view everyone's todos
  def todos
    authorize! :list_todos, @current_user if @current_user.manager? || params[:id].to_i == @current_user.id
    @todos = Todo.list(developer_id: params[:id])
    render json: @todos
  end

  # GET /users/1/projects
  #
  # Manager can view projects Created By him/her
  # Manager can use 'Projects#Index' API with URL param 'manager_id' to filter projects created by other Managers
  def projects
  	authorize! :list_projects, @current_user if @current_user.manager? && params[:id].to_i == @current_user.id
    @projects = Project.list(manager_id: params[:id])
    render json: @projects
  end
end
