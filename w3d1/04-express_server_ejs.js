// Basic express server w/ EJS
const users = require("./_users");
const express = require("express"); // Requiring / or making the express framework available in our file
const app = express(); // Web app, so the name of our server will be app, by calling the express function, app is ready to be used
const port = 3000;

app.use(express.static("public"));

app.set("view engine", "ejs"); // The template for express will be EJS

// const htmlPage = `
// <!DOCTYPE html>

// </html>

// `

app.get("/", (req, res) => {
  return res.render("index");
  // Act of rendering: Same thing as filing a form template
});

app.get("/users", (req, res) => {
  const userList = Object.values(users)

  const templateName = "users"
  const templateVariables = {users:userList}

  return res.render(templateName, templateVariables)
})

app.get("/users/:user_id", (req, res) => {
  const userId = req.params.user_id;
  const user = users[userId];

  if (!user) {
    res.send("HEY NO USER HERE!");
  }

  const templateName = "user";
  const templateVariables = { user: user };


//   <%= Outputs
// <% Runs
  return res.render(templateName, templateVariables);
});

app.listen(port);
