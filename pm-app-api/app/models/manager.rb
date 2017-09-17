class Manager < User
	has_many :projects, class_name: 'Project', foreign_key: 'user_id'

	# List of projects created by manager
	def projects_list
		Project.by_manager_id(id).order("created_at DESC").all
	end

	# Project - Todo detail for Dashboar page
	def projects_dashboard		
		todo_stats = Todo.statuses.inject({}) {|result, (k,v)| result[k.to_sym]=nil; result;}
		projects_list.includes(:todos).inject([]) do |result, project|
			todos_detail = todo_stats.clone
			project.todos.each { |todo| (todos_detail[todo.status.to_sym] ||= []) << {todo_id: todo.id, todo_name: todo.name} }
			result << {project_id: project.id, project_name: project.name}.merge!(todos: todos_detail)
			result
		end
	end
end
