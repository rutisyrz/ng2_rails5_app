class ProjectDeveloper < ApplicationRecord
  belongs_to :project
  belongs_to :developer, class_name: "Developer", foreign_key: "user_id"
end
