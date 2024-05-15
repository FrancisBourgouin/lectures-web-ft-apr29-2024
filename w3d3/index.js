const express = require("express");
const cookieParser = require("cookie-parser");
const {
  authenticateUser,
  fetchUserByEmail,
  createUser,
} = require("./helpers/userHelpers");
const { thieves } = require("./data/userData");

const app = express();
const port = 8080;

app.use(cookieParser());
app.use(express.static("public")); // Everything in the folder "public" will be accessible without having to build a route
app.use(express.urlencoded({ extended: false })); // Take a form string and convert it to an object (req.body)

app.use((req, res, next) => {
  const {error} = fetchUserByEmail(req.cookies.email, thieves)
  const whiteList = ["/", "/login", "/register"]

  if(error && !whiteList.includes(req.url)){
    return res.redirect("/")
  }

  return next()
})

app.set("view engine", "ejs"); // Tells render to use EJS by default

app.get("/", (req, res) => {
  console.log(thieves);

  const { user } = fetchUserByEmail(req.cookies.email, thieves);

  const templateVars = { user };

  if (user) {
    return res.render(`index-logged-in`, templateVars);
  }

  return res.render(`index`, templateVars);
});

app.get("/register", (req, res) => {
  const { user } = fetchUserByEmail(req.cookies.email, thieves);
  const templateVars = { error: req.cookies.error, user };
  res.clearCookie("error");

  return res.render("register", templateVars);
});

app.post("/register", (req, res) => {
  const { error, user } = createUser(req.body, thieves);

  if (error) {
    console.log(error);
    res.cookie("error", error);
    return res.redirect("/register");
    // return res.status(400).send(error);
  }

  res.cookie("email", user.email);
  return res.redirect("/");
});

app.get("/api/users", (req, res) => {
  // const {error} = fetchUserByEmail(req.cookies.email, thieves)

  // if(error){
  //   return res.redirect("/")
  // }

  return res.json(thieves)
})

app.post("/login", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  const { error, user } = authenticateUser(email, password, thieves);

  if (error) {
    console.log(error);
    return res.redirect("/");
  }
  res.cookie("email", user.email);
  return res.redirect("/");
});

app.post("/logout", (req, res) => {
  // res.cookie("email",null) BAD
  res.clearCookie("email");

  return res.redirect("/");
});

app.listen(port, () => console.log(`Express server running on port ${port}`)); // Start listening to requests on port specified by the port variable
