class Manager < User
	has_many :projects, class_name: 'Project', foreign_key: 'user_id'
end
