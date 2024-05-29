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

const connectToDB = () => db.connect();

const reportErrors = (err) => {
  console.log("\n-------------👿👿👿-----------------");
  console.log(err);
  console.log("----------------👿👿👿-------------\n");
};

const closeDBConnection = () => db.end();

const jokeId = process.argv[2];

const fetchJokeById = () => {
  const queryString = `
  SELECT jokes.*, authors.name, authors.description
  FROM jokes 
  LEFT JOIN authors 
  ON authors.id = jokes.author_id
  WHERE jokes.id = $1
  `;

  const queryArgs = [jokeId]
  return db.query(queryString, queryArgs).then((dbRes) => dbRes.rows[0]);
};

const outputJoke = (joke) => {
  console.log("\n---------------------------------");
  console.log(`Question: ${joke.question}`);
  console.log(`Answer: ${joke.answer}`);
  console.log(`By: ${joke.name}, ${joke.description}`);
  console.log("---------------------------------\n");
};


connectToDB()
  .then(fetchJokeById)
  .then(outputJoke)
  .catch(reportErrors)
  .finally(closeDBConnection)