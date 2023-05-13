const db = require("../db/dbConfig.js");

const getAllReviewsBySneaker = async (sneakerId) => {
  try {
    const result = await db.any("SELECT * FROM reviews WHERE sneaker_id=$1", [
      sneakerId,
    ]);
    return { result };
  } catch (error) {
    return { error };
  }
};

const getReview = async (id) => {
  try {
    const result = await db.one(`SELECT * FROM reviews WHERE id=${id}`);
    return { result };
  } catch (error) {
    return { error };
  }
};

const createReview = async (review) => {
  try {
    const result = await db.one(
      `INSERT INTO
        reviews(reviewer, title, content, rating, sneaker_id)
       VALUES
        ($1, $2, $3, $4, $5)
       RETURNING *;`,
      [
        review.reviewer,
        review.title,
        review.content,
        review.rating,
        review.sneaker_id
      ]
    );
    return { result };
  } catch (error) {
    return { error };
  }
};

const deleteReview = async (id) => {
  // sneakers/id
  try {
    const result = await db.one(
      "DELETE FROM reviews WHERE id=$1 RETURNING *",
      id
    );
    return { result };
  } catch (error) {
    return { error };
  }
};

const updateReview = async (id, review) => {
  // sneakers/id
  try {
    const result = await db.one(
      `UPDATE reviews SET reviewer=$1, title=$2, content=$3, rating=$4 sneaker_id=$5 WHERE id=$6 RETURNING *`,
      [
        review.reviewer,
        review.title,
        review.content,
        review.rating,
        review.sneaker_id,
        id,
      ]
    );
    return { result };
  } catch (error) {
    return { error };
  }
};

module.exports = {
  getAllReviewsBySneaker,
  getReview,
  createReview,
  deleteReview,
  updateReview,
};