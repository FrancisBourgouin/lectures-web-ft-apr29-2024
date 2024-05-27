DROP TABLE IF EXISTS jokes; 
DROP TABLE IF EXISTS authors;
DROP TABLE IF EXISTS cohorts;

CREATE TABLE cohorts(
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    description TEXT
);

CREATE TABLE authors(
    id SERIAL PRIMARY KEY, -- PRIMARY KEY
    name TEXT NOT NULL,
    funny BOOLEAN NOT NULL,
    description TEXT NOT NULL,
    cohort_id INT REFERENCES cohorts(id) ON DELETE CASCADE
);

CREATE TABLE jokes(
   id SERIAL PRIMARY KEY, -- PRIMARY KEY
   question TEXT NOT NULL,
   answer TEXT,
   rating FLOAT NOT NULL,
   author_id INT REFERENCES authors(id) ON DELETE CASCADE -- FOREIGN KEY
);


-- 
-- English-like

-- Foreign keys?

-- SQL we want to avoid repetition