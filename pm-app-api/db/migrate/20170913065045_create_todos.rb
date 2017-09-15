class CreateTodos < ActiveRecord::Migration[5.1]
  def change
    create_table :todos do |t|
      t.string :name
      t.references :user, foreign_key: true, comment: "Referes to a Developer"
      t.references :project, foreign_key: true, comment: "Referes to a Project"
      t.integer :status, limit:1, default: Todo.statuses["unassigned"]

      t.timestamps
    end
  end
end
