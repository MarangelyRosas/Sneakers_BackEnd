const db = require("../db/dbConfig.js");

const getAllSneakers = async () => {
  try {
    const result = await db.any("SELECT * FROM sneakers");
    return { result };
  } catch (error) {
    return { error };
  }
};

const getSneaker = async (id) => {
  try {
    const result = await db.any(`SELECT * FROM sneakers WHERE id=${id}`);
    return { result };
  } catch (error) {
    return { error };
  }
};

const createSneaker = async (sneaker) => {
  try {
    const result = await db.one(
      `INSERT INTO
        sneakers(name, image, release_date, rating, url)
       VALUES
        ($1, $2, $3, $4, $5)
       RETURNING *;`,
      [sneaker.name, sneaker.image, sneaker.release_date, sneaker.rating, sneaker.url]
    );
    return { result };
  } catch (error) {
    return { error };
  }
};

const deleteSneaker = async (id) => {
  try {
    const result = await db.one(
      "DELETE FROM sneakers WHERE id=$1 RETURNING *",
      id
    );
    return { result };
  } catch (error) {
    return { error };
  }
};

const updateSneaker = async (id, sneaker) => {
  try {
    const result = await db.one(
      `UPDATE sneakers SET name=$1, image=$2, release_date=$3, rating=$4, url=$5 WHERE id=$6 RETURNING *`,
      [sneaker.name, sneaker.image, sneaker.release_date, sneaker.rating, sneaker.url, id]
    );
    return { result };
  } catch (error) {
    return { error };
  }
};

module.exports = {
  getAllSneakers,
  getSneaker,
  createSneaker,
  deleteSneaker,
  updateSneaker,
};