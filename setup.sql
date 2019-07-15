CREATE TABLE canvas(id serial PRIMARY KEY, canvas_name JSON);

CREATE TABLE colors(name varchar(20) PRIMARY KEY, totalclicks INTEGER, sessionclicks INTEGER);

INSERT INTO colors(name, totalclicks, sessionclicks) VALUES('red', 0, 0), ('brown', 0, 0), ('blue', 0, 0);

INSERT INTO canvas(id) VALUES(1);
