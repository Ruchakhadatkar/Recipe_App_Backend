const mongoose = require("mongoose");

const recipeModel = new mongoose.Schema({
  recipeName: { type: String, required: true },
  image: { type: String, required: true },
  type: { type: String, required: true },
  ingredients: [String],
  procedure: { type: String, required: true },
});

const Recipe = mongoose.model("Recipe", recipeModel);
module.exports = Recipe;
