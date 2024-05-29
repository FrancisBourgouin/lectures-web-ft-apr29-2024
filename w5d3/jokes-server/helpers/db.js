require("dotenv").config();

const pg = require("pg");

// Client => Open a connection between us and the DB server
// Pool => Open a connection to a query pool
const db = new pg.Client({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
});

db.connect();

module.exports = db