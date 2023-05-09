const express = require("express");
const sneakers = express.Router();
const validateSneaker = require("../validations/validateSneaker.js");

const reviewsController = require("./reviewsController.js");
const {
  getAllSneakers,
  getSneaker,
  createSneaker,
  deleteSneaker,
  updateSneaker,
} = require("../queries/sneakers.js");

sneakers.use("/:sneakerId/reviews", reviewsController);

// index (all sneakers)
sneakers.get("/", async (req, res) => {
  const { error, result } = await getAllSneakers();
  if (error) {
    res.status(500).json({ error: "server error" });
  } else {
    res.status(200).json(result);
  }
});

// show (individual/one pair sneaker)
sneakers.get("/:id", async (req, res) => {
  const { id } = req.params;
  const { error, result } = await getSneaker(id);
  if (error?.code === 0) {
    res.status(404).json({ error: "sneaker not found" });
  } else if (error) {
    res.status(500).json({ error: "server error" });
  } else {
    res.status(200).json(result);
  }
});

// create
sneakers.post("/", validateSneaker, async (req, res) => {
  const { error, result } = await createSneaker(req.body);
  if (error) {
    res.status(500).json({ error: "server error" });
  } else {
    res.status(201).json(result);
  }
});

// update 
sneakers.put("/:id", validateSneaker, async (req, res) => {
  const { id } = req.params;
  const { error, result } = await updateSneaker(id, req.body);
  if (error) {
    res.status(500).json({ error: "server error" });
  } else {
    res.status(200).json(result);
  }
});

// delete 
sneakers.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const { error, result } = await deleteSneaker(id);
  if (error) {
    res.status(404).json("Sneaker not found");
  } else {
    res.status(201).json(result);
  }
});

module.exports = sneakers;