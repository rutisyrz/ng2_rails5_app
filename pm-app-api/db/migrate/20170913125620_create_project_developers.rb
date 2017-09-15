class CreateProjectDevelopers < ActiveRecord::Migration[5.1]
  def change
    create_table :project_developers do |t|
      t.references :project, comment: "Referes to a Project"
      t.references :user, comment: "Referes to a Developer"
      t.index [:project_id, :user_id], unique: true
      t.timestamps
    end
  end
end
