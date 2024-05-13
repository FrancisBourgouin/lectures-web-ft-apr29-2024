// Basic express server wo/ EJS

const users = require("./_users");
const express = require("express"); // Requiring / or making the express framework available in our file
const app = express(); // Web app, so the name of our server will be app, by calling the express function, app is ready to be used
const port = 3000;

// MIDDLEWARE TIME ! :D

// This middleware will show the route asked, but will not intercept the request since we use next()
app.use((req, res, next) => {
  console.log(`A client asked for ${req.url}`);

  if(Math.random() > 0.5){
    return res.send("THIS IS A RANDOM SECURITY CHECK!")
  }

  return next(); // Move along, go to the other route handlers!
});

// app                      : web app
// .get                     : In the event of a GET request, I want to do the callback on the condition of...
// "/"                      : If the GET request has an url of "/", then...
// (req, res) => {}         : Req is the request, res is the response
// res.send('Hello World!') : Send hello world as part of the http response
app.get("/", (req, res) => {
  return res.send("Hello World!");
});

app.get("/chicken", (req, res) => {
  return res.send("🐔🐔🐔🐔🐔🐔🐔🐔🐔");
});

// This runs for all the route methods, and will intercept any request that made it this far!
app.use((req, res, next) => {
  console.log(`A client asked for a page that doesn't exist: ${req.url}`);

  return res.status(404).send("OH NO! WE DON'T HAVE PAGE HERE, MAYBE GO SEE ELSEWHERE");
});

app.listen(port);
