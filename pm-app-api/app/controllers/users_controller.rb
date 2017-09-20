class UsersController < ApplicationController
  load_and_authorize_resource :except => [:todos]
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
    render json: @current_user.todo_list
  end

  # GET /users/1/projects
  #
  # Manager can view projects Created By him/her
  # Manager can use 'Projects#Index' API with URL param 'manager_id' to filter projects created by other Managers
  def projects
    render json: @current_user.projects_list
  end

  # GET /users/1/projects_dashboard
  #
  # Dashboard where Manager can view projects and todos list grouped by status
  def projects_dashboard
    render json: @current_user.projects_dashboard
  end
end
