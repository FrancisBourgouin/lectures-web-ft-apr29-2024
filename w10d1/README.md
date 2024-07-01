# W10D1 - Rails Review

- Review Rails by building a project
- Existential questions

## Opinions

- No news is good news.
- Not sure at first, growing on me (like a basil?)

## Rebuild TinyApp

CRUD => Create Read Update Delete
BREAD => Browse Read Edit Add Delete

- Urls => Create, Delete, Edit, Browse, View (Full BREAD)
- Users => Create (Start with scaffold, trim what we don't need (BREAD => A))
- Session => Create, Delete  BREAD => AD

(JWTs => Same login system for multiple platforms (Amazon.com / AWS / Twitch))

### Planning

Since we're using an existing project (User stories, Mockups, Data structures, etc)

### Steps

- Figure out user authencation (session, etc)
- Figure out how to add Bootstrap to Rails
- Figure out how to create random shortUrls (b2xVn2)

- Build!
  
Auth tutorial => https://gist.github.com/thebucknerlife/10090014
Bootstrap => https://medium.com/@xnjiang/how-to-install-bootstrap-in-rails-7-f7a04bf9a7e3
Generate URL shorturls => https://stackoverflow.com/questions/88311/how-to-generate-a-random-string-in-ruby

1. Rails app
2. Scaffold the user
3. Scaffold the sessions 
   1. When creating the user, make sure to use password_digest over password (in model)
   2. When creating the signup form, make sure to use :password instead of :password_digest in the form
   3. Make sure to filter the proper user params in private method
   4. Make sure to turn of the bcrypt gem
   5. Add has_secure_password to the user model
   6. Create a session controller (step 10 in tutorial)
   7. Make sure to add the routes
   8. Create the helper methods (Steop 10 - 15 in tutorial)
4. Scaffold the urls
   1. View SO post to generate the shortUrls
5. Make it pretty with bootstrap