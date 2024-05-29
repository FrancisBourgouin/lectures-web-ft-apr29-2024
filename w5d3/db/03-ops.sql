-- fetchAllJokes

SELECT 
  jokes.*,
  authors.name AS author_name,
  authors.funny AS author_funny,
  authors.description AS author_description
FROM jokes
JOIN authors
ON authors.id = jokes.author_id
;

-- fetchJokeById

SELECT * 
FROM jokes
JOIN authors
ON authors.id = jokes.author_id
WHERE jokes.id = 3
;

-- insertJoke

INSERT INTO
  jokes (question, answer, rating, author_id)
VALUES
  ('question', 'answer',3, 1)
;
