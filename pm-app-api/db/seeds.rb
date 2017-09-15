# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# Default user
Manager.create(email: 'hoeger@gmail.com', password: "12345678")

["sincere@gmail.com", "shanna@gmail.com", "nathan@gmail.com"].each do |email|
	Developer.create(email: email, password: "12345678")	
end
