const express = require("express");
const Recipe = require("../models/recipeModel");
const recipes = require("../data/recipeData");
const Favorite = require("../models/favoriteModel");

const routes = express.Router();

routes.post("/", async (req, res) => {
  const id = req.body.id;
  try {
    const data = await Favorite.create({ recipeId: id });
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

routes.get("/", async (req, res) => {
  try {
    let data = await Favorite.find({}).populate("recipeId")
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

routes.get("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const data = await Favorite.findOne({ recipeId: id });
    if (data) {
      res.json({ like: true });
    } else {
      res.json({ like: false });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

routes.delete("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const data = await Favorite.deleteOne({ recipeId: id });
    if (data.deletedCount === 1) {
      res.json({ like: false });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = routes;
