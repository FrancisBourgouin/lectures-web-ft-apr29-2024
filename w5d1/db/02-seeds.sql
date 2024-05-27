INSERT INTO cohorts (name, description) VALUES ('Web Immersive', 'The web immersive program!');
INSERT INTO cohorts (name) VALUES ('Web Flex');

INSERT INTO authors (name, description, funny, cohort_id) VALUES ('Francis', 'Oh boy, he is a teacher', TRUE, 1); 
INSERT INTO authors (name, funny, description, cohort_id) VALUES ('Paul', TRUE, 'A student in march01', 1);
INSERT INTO authors (name, funny, description, cohort_id) VALUES ('Mike', TRUE, 'A student in march01', 1);
INSERT INTO authors (name, funny, description, cohort_id) VALUES ('Grigor', TRUE, 'A student in march29', 1);
INSERT INTO authors (name, funny, description, cohort_id) VALUES ('Zack', TRUE, 'A student in march29', 1);
INSERT INTO authors (name, funny, description, cohort_id) VALUES ('Anton', TRUE, 'A student in july 19', 1);
INSERT INTO authors (name, funny, description, cohort_id) VALUES ('Aphy', TRUE, 'A student in july 19', 2);
INSERT INTO authors (name, funny, description, cohort_id) VALUES ('Alex', TRUE, 'A student in july 19', 2);
INSERT INTO authors (name, funny, description, cohort_id) VALUES ('Dusty', TRUE, 'A student in nov 22', 2);
INSERT INTO authors (name, funny, description, cohort_id) VALUES ('Olga', TRUE, 'A student in nov 22', 2);
INSERT INTO authors (name, funny, description, cohort_id) VALUES ('Luciana', TRUE, 'A student in nov 22', 2);
INSERT INTO authors (name, funny, description, cohort_id) VALUES ('Aldwin', TRUE, 'A student in sept 19', 2);
INSERT INTO authors (name, funny, description, cohort_id) VALUES ('Matt', TRUE, 'A student in sept 19', 2);


INSERT INTO
  jokes (question, answer, rating, author_id)
VALUES
  ('Knock knock, whos there, to who', 'no, to whom',3, 1),
  ('How is a bouncer at a club like a dish soap?', 'They both DETER GENTS', 5, 2),
  ('What do you call a belt made out of watches?', 'A waist of time.', 5, 3),
  ('Why do programmers mix hallowen and christmas', 'because OCT 31 === DEC 25',10, 1),
  ('You know you should knock on your fridge door before opening it', 'There might by a salad dressing',5, 4),
  ('Why did the chicken cross the road?', 'Because there was a green light',4.46, 7),
  ('What is small, green and goes up and down?', 'A green pea in an elevator',4.46, null),
  ('Did you hear about the monkeys who shared an Amazon account?', 'They were Prime mates.',4, 6),
  ('Did you recognize that 2022 sound like 2020 too', NULL ,3, 10),
  ('What do you call a fly without wings?', 'A walk',5, 9),
  ('What do you call a bear with no teeth?', 'A Gummy Bear',4, 11),
  ('What do you call an indecisive bee?', ' A maybe.',5, 12);

