DROP DATABASE IF EXISTS sneakers_dev;
CREATE DATABASE sneakers_dev;

\c sneakers_dev;

CREATE TABLE sneakers (
   id SERIAL PRIMARY KEY,
   name TEXT NOT NULL,
   brand TEXT NOT NULL, 
   release_date DATE,
   price INT, 
   rating NUMERIC,
   CHECK (rating >= 0 AND rating <= 5),
   is_favorite BOOLEAN DEFAULT FALSE
);

CREATE TABLE images (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    url TEXT NOT NULL,
    sneaker_ID INTEGER NOT NULL REFERENCES sneakers (id)
    ON DELETE CASCADE
);

CREATE TABLE links (
    id SERIAL PRIMARY KEY,
    store_name TEXT NOT NULL,
    url TEXT NOT NULL,
    sneaker_ID INTEGER NOT NULL REFERENCES sneakers (id)
    ON DELETE CASCADE
); 

CREATE TABLE reviews (
    id SERIAL PRIMARY KEY,
    reviewer TEXT NOT NULL,
    title TEXT NOT NULL,
    content TEXT NOT NULL,
    rating NUMERIC,
    CHECK (rating >= 0 AND rating <= 5),
    sneaker_ID INTEGER NOT NULL REFERENCES sneakers (id)
    ON DELETE CASCADE
);