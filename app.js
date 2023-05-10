// Dependencies
const express = require("express");
const cors = require("cors");
const sneakersController = require("./controllers/sneakersController");
const reviewsController = require("./controllers/reviewsController");

// Configuration
const app = express();

// Middleware
app.use(cors());
app.use(express.json()); //parses incoming json request

// Routes
app.get("/", (req, res) => {
    res.send("Welcome to the most amazing Sneakers App");
  });

app.use("/sneakers", sneakersController);

app.get("*", (req, res) => {
    res.status(404).send("Page not found");
});
  

module.exports = app;