const mongoose = require("mongoose");

const favoriteModel = new mongoose.Schema({
  recipeId: { type: mongoose.Schema.Types.ObjectId, ref: "Recipe" },
});

const Favorite = mongoose.model("Favorite", favoriteModel);
module.exports = Favorite;
