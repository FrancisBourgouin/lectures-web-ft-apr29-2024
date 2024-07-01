# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)


user1 = Author.create(name: "Little Chicken", email: "pock@pock.com", description:"A random chicken author")
user2 = Author.create(name: "Pequeno Pollo", email: "pockspanish@pock.com", description:"A random chicken author that speaks spanish")

10.times do |num|
  user1.posts.create(title:"Post ##{num}", content:"Some content...")
end

10.times do |num|
  user2.posts.create(title:"Post ##{num}", content:"Some content...")
end