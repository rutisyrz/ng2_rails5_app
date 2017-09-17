class Project < ApplicationRecord

	include NameRequired

  belongs_to :manager, class_name: 'Manager', foreign_key: 'user_id'
 	
 	has_many :project_developers
	has_many :developers, through: :project_developers, source: :developer

	has_many :todos

	scope :by_manager_id, -> (manager_id) { where(user_id: manager_id) }

	# add a developer in project
	def add_developer(user_id)
		project_developers.build(project_id: id, user_id: user_id).save
	end	

	# Retuens list of todos along with stats WRT status to render pie chart
	def todo_details
		todo_stats = Todo.statuses.inject({}) {|result, (k,v)| result[k]=0; result;}
		todo_list = todos.inject([]) { |result, todo| result << todo.attributes; todo_stats[todo.status]+=1; result }
		stats = todo_stats.inject([]) {|result, (k,v)| result << [k.humanize, v]; result; }.unshift(["Task", "Count"])
		{todos: todo_list, stats: stats}
	end

end
