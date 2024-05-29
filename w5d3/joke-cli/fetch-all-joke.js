// SELECT jokes.*, authors.name, authors.description
// FROM jokes
// JOIN authors
// ON authors.id = jokes.author_id
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

const fetchAllJokes = () => {
  const queryString = `
  SELECT jokes.*, authors.name, authors.description
  FROM jokes 
  JOIN authors 
  ON authors.id = jokes.author_id
  `;
  return db.query(queryString).then((dbRes) => dbRes.rows);
};

// {
//   id: 12,
//   question: 'What do you call an indecisive bee?',
//   answer: ' A maybe.',
//   rating: 5,
//   author_id: 12,
//   name: 'Aldwin',
//   description: 'A student in sept 19'
// },

const outputJokes = (jokeList) => {
  for (const joke of jokeList) {
    console.log("\n---------------------------------");
    console.log(`Question: ${joke.question}`);
    console.log(`Answer: ${joke.answer}`);
    console.log(`By: ${joke.name}, ${joke.description}`);
    console.log("---------------------------------\n");
  }
};

const reportErrors = (err) => {
  console.log("\n-------------👿👿👿-----------------");
  console.log(err);
  console.log("----------------👿👿👿-------------\n");
};

const closeDBConnection = () => db.end();

connectToDB()
  .then(fetchAllJokes)
  .then(outputJokes)
  .catch(reportErrors)
  .finally(closeDBConnection);
