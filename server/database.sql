CREATE DATABASE todolist;

CREATE TABLE movies(
    id SERIAL PRIMARY KEY,
    movie_name VARCHAR(255),
    movies_review VARCHAR(50)
);
SELECT * FROM movies;

INSERT INTO movies( movie_name,movies_review )
VALUES('kingsman' ,'good');

