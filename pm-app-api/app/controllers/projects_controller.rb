class ProjectsController < ApplicationController
  load_and_authorize_resource

  before_action :authenticate_user!
  before_action :set_project, only: [:show, :update, :destroy, :add_developer, :developers]

  # GET /projects
  def index
    @projects = Project.all

    render json: @projects
  end

  # GET /projects/1
  def show
    render json: @project
  end

  # POST /projects
  def create
    @project = Project.new(project_params)

    if @project.save
      render json: @project, status: :created, location: @project
    else
      render json: @project.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /projects/1
  def update
    if @project.update(project_params)
      render json: @project
    else
      render json: @project.errors, status: :unprocessable_entity
    end
  end

  # DELETE /projects/1
  def destroy
    @project.destroy
  end

  # GET /projects/1/developers
  def developers
    @developers = @project.developers.inject([]) { |result, user| result << {id: user.id, email: user.email} }
    render json: @developers
  end

  # GET /projects/1/todos
  def todos    
    render json: @project.todo_details
  end

  # POST /projects/:id/add_developer
  def add_developer
    begin
      if @project.add_developer(project_params[:user_id])
        @developer = Developer.find(project_params[:user_id])
        render json: @developer, status: :created
      else
        render json: @project.errors, status: :unprocessable_entity
      end
    rescue ActiveRecord::RecordNotUnique => e
      render json: "Developer is already associated with a project", status: :unprocessable_entity
    rescue Exception => e 
      render json: e.message, status: :unprocessable_entity
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_project
      @project = Project.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def project_params
      params.require(:project).permit(:name, :user_id)
    end
end
