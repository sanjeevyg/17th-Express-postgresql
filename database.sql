CREATE DATABASE todo_databae;

--\c into todo_database

CREATE TABLE todo(
    todo_id SERIAL PRIMARY KEY,
    description VARCHAR(255)
) 