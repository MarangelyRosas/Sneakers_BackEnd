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
        sneakers(name, image_url, brand, release_date, price, purchase_url, rating, is_favorite)
       VALUES
        ($1, $2, $3, $4, $5, $6, $7, $8)
       RETURNING *;`,
      [sneaker.name, sneaker.image_url, sneaker.brand, sneaker.release_date, sneaker.price, sneaker.purchase_url, sneaker.rating, sneaker.is_favorite]
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
      `UPDATE sneakers SET name=$1, image_url=$2, brand=$3, release_date=$4, price=$5, purchase_url=$6, rating=$7, is_favorite=$8  WHERE id=$9 RETURNING *`,
      [sneaker.name, sneaker.image_url, sneaker.brand, sneaker.release_date, sneaker.price, sneaker.purchase_url, sneaker.rating, sneaker.is_favorite, id]
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