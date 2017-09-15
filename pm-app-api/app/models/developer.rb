class Developer < User	
	has_many :project_developers, foreign_key: "user_id"
	has_many :projects, through: :project_developers

	has_many :todos, foreign_key: "user_id"

end
