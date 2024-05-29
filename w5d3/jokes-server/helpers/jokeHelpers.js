const db = require("./db")

const fetchAllJokes = () => {
  const queryString = `
  SELECT jokes.*, authors.name, authors.description
  FROM jokes 
  LEFT JOIN authors 
  ON authors.id = jokes.author_id
  `;
  return db.query(queryString).then((dbRes) => dbRes.rows);
};

const fetchAllAuthors = () => {
  const queryString = `
  SELECT authors.id, authors.name
  FROM authors
  `;
  return db.query(queryString).then((dbRes) => dbRes.rows);
};

const fetchJokeById = (jokeId) => {
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

const addJokeToDatabase = (formData) => {
  const {question, answer, rating, author_id} = formData
  const queryString = `
  INSERT INTO jokes
    (question, answer, rating, author_id)
  VALUES
    ($1, $2, $3, $4)
  RETURNING *
  `;

  const queryArgs = [question, answer, rating, author_id]
  return db.query(queryString, queryArgs).then((dbRes) => dbRes.rows[0]);
}

module.exports = { fetchAllJokes, fetchJokeById, addJokeToDatabase, fetchAllAuthors };
