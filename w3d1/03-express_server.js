// Basic express server wo/ EJS

// Framework => A collection of tools, but they need to be used in a specific way (Ikea kit)
// Library => A collection of tools, with little to no guidance (Toolbox)

const users = require("./_users");
const express = require("express"); // Requiring / or making the express framework available in our file
const app = express(); // Web app, so the name of our server will be app, by calling the express function, app is ready to be used
const port = 3000;

// app                      : web app
// .get                     : In the event of a GET request, I want to do the callback on the condition of...
// "/"                      : If the GET request has an url of "/", then...
// (req, res) => {}         : Req is the request, res is the response
// res.send('Hello World!') : Send hello world as part of the http response

app.get("/", (req, res) => {
  return res.send("Hello World!");
});

app.get("/topsecret", (req,res) => {
  return res.redirect("/")
})

// What would the first line look like if we did a POST request to /users
app.post("/users", (req, res) => {
  return res.send("GOOD JOB");
});

// Show all users
app.get("/users", (req, res) => {
  return res.json(users);
});

// User creation page
app.get("/users/new", (req,res) => {
  return res.send("USER CREATION PAGE!")
})

// Show a specific user
// /users/:user_id /users/WHATEVER IS IN HERE
app.get("/users/:user_id", (req, res) => {
  const userId = req.params.user_id;
  const user = users[userId]

  // res.send(`You asked for user with the id of ${userId}`)
  if(!user){
    return res.status(404).send("OH NO, NO USER FOUND :(")
  } 
  
  return res.json(user);
});


app.listen(port, () => {
  // Make web app available from port 3000 (specified above)
  console.log(`Example app listening on port ${port}`);
});
