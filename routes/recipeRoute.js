const express = require("express");
const Recipe = require("../models/recipeModel");
const recipes = require("../data/recipeData");

const routes = express.Router();

routes.post("/", async (req, res) => {
  try {
    await Recipe.deleteMany();
    const data = await Recipe.insertMany(recipes);
    res.send(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

routes.get("/", async (req, res) => {
  try {
    const data = await Recipe.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

routes.get("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const data = await Recipe.findById(id);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

routes.get("/category/:type", async (req, res) => {
  const type = req.params.type;
  try {
    const data = await Recipe.find({ type: { $regex: new RegExp(type, "i") } });
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

routes.get("/search/:q", async (req, res) => {
  const searchTerm = req.params.q;
  try {
    const data = await Recipe.find({
      $or: [
        { recipeName: { $regex: searchTerm, $options: "i" } },
        { type: { $regex: searchTerm, $options: "i" } },
        { ingredients: { $regex: searchTerm, $options: "i" } },
        { procedure: { $regex: searchTerm, $options: "i" } },
        // Add more fields as needed
      ],
    });
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = routes;
