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
        reviews(sneaker_id, reviewer, content, rating)
       VALUES
        ($1, $2, $3, $4)
       RETURNING *;`,
      [
        review.sneaker_id,
        review.reviewer,
        review.content,
        review.rating,
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
      `UPDATE reviews SET sneaker_id=$1, reviewer=$2, content=$3, rating=$4 WHERE id=$5 RETURNING *`,
      [
        review.sneaker_id,
        review.reviewer,
        review.content,
        review.rating,
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