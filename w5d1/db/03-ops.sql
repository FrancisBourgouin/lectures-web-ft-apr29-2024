-- Basic SELECT

SELECT
* 
FROM
authors
;

-- Single WHERE clause (CONDITION)

SELECT * FROM jokes WHERE rating > 3;

SELECT * FROM jokes WHERE author_id IS NOT NULL;

SELECT * FROM jokes WHERE question LIKE 'What%';

SELECT * FROM jokes WHERE question LIKE '% an %';

SELECT * FROM jokes WHERE LOWER(question) LIKE LOWER('%Call%');

SELECT * FROM jokes WHERE LOWER(question) LIKE '%call%';

SELECT * FROM jokes WHERE question ILIKE '%Call%';

-- Multiple WHERE clauses

SELECT * 
FROM JOKES
WHERE question ILIKE '%Call%'
AND question LIKE 'What%'
OR author_id IS NULL
;

-- Ordering results


SELECT * 
FROM JOKES
ORDER BY rating DESC, question DESC
;

-- Joining tables

-- Primary Key Main key of a row in a specific table (INT AUTO-INCREMENT, SERIAL)
-- Foreign Key Key of another row, it may be from another table, or the same table

SELECT *
FROM jokes LEFT JOIN authors
ON jokes.author_id = authors.id
;

SELECT *
FROM authors RIGHT JOIN jokes
ON jokes.author_id = authors.id
;

SELECT *
FROM jokes FULL OUTER JOIN authors
ON jokes.author_id = authors.id
;

SELECT 
  jokes.*,
  authors.name AS author_name,
  authors.description AS author_description,
  authors.funny AS author_funny
FROM jokes 
LEFT JOIN authors
ON jokes.author_id = authors.id
;

SELECT 
  jokes.*,
  authors.name AS author_name,
  authors.description AS author_description,
  authors.funny AS author_funny
FROM jokes 
RIGHT JOIN authors
ON jokes.author_id = authors.id
;

SELECT 
  jokes.*,
  authors.name AS author_name,
  authors.description AS author_description,
  authors.funny AS author_funny,
  cohorts.name AS cohort_name
FROM jokes 
LEFT JOIN authors
ON jokes.author_id = authors.id
LEFT JOIN cohorts
ON authors.cohort_id = cohorts.id
;

-- LEFT JOIN 90%+
-- INNER JOIN 5%
-- REST %5
-- Nested selects

-- ALL THE AUTHORS THAT ARE IN WEB IMMERSIVE

SELECT *
FROM authors
JOIN cohorts
ON authors.cohort_id = cohorts.id
WHERE cohorts.name LIKE '%Immersive%'
;

SELECT *
FROM authors
WHERE authors.id = 1
OR authors.id = 2
OR authors.id = 3
;

SELECT *
FROM authors
WHERE authors.id IN (1,2,3)
;

SELECT *
FROM authors
WHERE authors.cohort_id IN (SELECT id FROM cohorts WHERE name LIKE '%Immersive%')
;

-- Aggregate functions (AVG, MIN, MAX, SUM, COUNT) (HAVING GROUPBY)

SELECT AVG(rating)
FROM jokes;


SELECT AVG(rating), author_id
FROM jokes
GROUP BY author_id
HAVING AVG(rating) > 4;

-- SHOW the jokes of authors having an average of 4 and more in their jokes

SELECT *
FROM jokes
WHERE author_id IN (
  SELECT author_id
  FROM jokes
  GROUP BY author_id
  HAVING AVG(rating) > 4
);

-- Views (stretch)
-- Essentially a read-only table

DROP VIEW IF EXISTS cool_authors;

CREATE VIEW cool_authors AS (
  SELECT author_id
  FROM jokes
  WHERE author_id IS NOT NULL
  GROUP BY author_id
  HAVING AVG(rating) > 4
);

SELECT *
FROM jokes
WHERE author_id IN (SELECT * FROM cool_authors)
;

DROP VIEW IF EXISTS jokes_with_authors;
CREATE VIEW jokes_with_authors AS (
  SELECT 
    jokes.*, 
    CASE
      WHEN authors.name IS NULL THEN 'Unknown'
      WHEN authors.name IS NOT NULL THEN authors.name
    END AS author_name,

    CASE
      WHEN authors.description IS NULL THEN 'Unknown'
      WHEN authors.description IS NOT NULL THEN authors.description
    END AS author_description,

    CASE
      WHEN authors.funny IS NULL THEN false
      WHEN authors.funny IS NOT NULL THEN authors.funny
    END AS author_funny,

    CASE
      WHEN jokes.rating < 5 THEN 'Kinda bad'
      WHEN jokes.rating >= 5  AND jokes.rating < 7 THEN 'Its fine'
      WHEN jokes.rating > 7 THEN 'Its great'
    END AS joke_rating

  FROM jokes
  LEFT JOIN authors
  ON jokes.author_id = authors.id
);

-- HOW MANY JOKES WITHOUT AUTHORS

SELECT COUNT(id) AS jokes_with_author FROM jokes WHERE author_id IS NOT NULL;

SELECT MIN(rating) AS worst_rating, MAX(rating) AS best_rating, author_id FROM jokes GROUP BY author_id;