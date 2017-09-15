class Todo < ApplicationRecord
	
	include NameRequired

	enum status: [:unassigned, :assigned, :in_process, :complete]

  belongs_to :project
  has_one :manager, through: :project, source: :manager

  belongs_to :developer, class_name: 'User', foreign_key: 'user_id'  

  scope :by_developer_id, -> (developer_id) { where(user_id: developer_id) }
  scope :by_project_id, -> (project_id) { where(project_id: project_id) }

  class << self
  	def list(params)
  		todos = if params[:developer_id]
				  			Todo.by_developer_id(params[:developer_id]) 
				  		elsif params[:project_id]
				  			Todo.by_project_id(params[:project_id]) 
				  		else
					  		Todo.all
					  	end
  		todos.order("created_at DESC").includes(:developer).includes(:project).inject([]) do |result, todo| 
  			result << todo.attributes.merge(project: todo.project.name)
                            .merge(developer: (todo.developer.developer? ? todo.developer.email : ''))
  			result 
  		end
  	end
  end
end
