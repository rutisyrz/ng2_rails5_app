class CreateProjectsUsers < ActiveRecord::Migration[5.1]
  def change
    create_table :projects_users do |t|
      t.belongs_to :project, foreign_key: true, comment: "Referes to a Project"
      t.belongs_to :user, foreign_key: true, comment: "Referes to a Developer"
    end
  end
end
