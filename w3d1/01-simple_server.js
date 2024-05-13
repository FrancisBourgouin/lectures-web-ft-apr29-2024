// Net package vs HTTP package

const http = require("http");


// HTTP METHODS

// GET => Asking to receive a piece of information (html, javascript, css, images, videos, etc)
// POST => Asking to add a piece of information

// EXTRAS
// PUT/PATCH => Asking to update a piece of information
// DELETE => Asking to delete a piece of information


// HTTP Routes
// GET/POST are the only available methods for forms in HTML (by default)

// POST /users => Create a user
// PUT /users/:user_id => Update a user
// DELETE /users/:user_id => Delete a user

// POST /users/:user_id/edit
// POST /users/:user_id/delete

// REST pattern
// /resources/:resource_id
// Posts of a specific user
// /users/:user_id/posts/:post_id

const server = http.createServer((req, res) => {
  console.log("The request type is:", req.method);
  console.log("The path that they are for is:", req.url);
  console.log("The content is:", req.headers);

  res.end(`Your preferred language is ${req.headers["accept-language"].split(",")[0]}`)
});

server.listen(3000);
