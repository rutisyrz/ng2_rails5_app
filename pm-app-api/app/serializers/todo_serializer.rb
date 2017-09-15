class TodoSerializer < ActiveModel::Serializer
  attributes :id, :name, :user_id, :project_id, :status
end
