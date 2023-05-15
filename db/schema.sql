DROP DATABASE IF EXISTS sneakers_dev;
CREATE DATABASE sneakers_dev;

\c sneakers_dev;

CREATE TABLE sneakers ( 
   id SERIAL PRIMARY KEY,
   name TEXT NOT NULL,
   image_url TEXT,
   brand TEXT NOT NULL, 
   release_date TEXT,
   price INT, 
   purchase_url TEXT,
   rating NUMERIC,
   CHECK (rating >= 0 AND rating <= 5),
   is_favorite BOOLEAN DEFAULT FALSE
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
