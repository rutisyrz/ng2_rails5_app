class Project < ApplicationRecord

	include NameRequired

  belongs_to :manager, class_name: 'Manager', foreign_key: 'user_id'
 	
 	has_many :project_developers
	has_many :developers, through: :project_developers, source: :developer

	has_many :todos

	scope :by_manager_id, -> (manager_id) { where(user_id: manager_id) }

	def add_developer(user_id)
		project_developers.build(project_id: id, user_id: user_id).save
	end	

  class << self
  	def list(params)
  		projects = 	if params[:manager_id]
						  			Project.by_manager_id(params[:manager_id]) 				  
						  		else
							  		Project.all
							  	end
  		projects.order("created_at DESC").includes(:manager).inject([]) do |result, project| 
  			result << project.attributes.merge(manager: project.manager.email) 
  			result
  		end
  	end
  end

end
