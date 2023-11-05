const mongoose = require("mongoose");

const reviewModel = new mongoose.Schema(
  {
    recipeId: { type: mongoose.Schema.Types.ObjectId, ref: "Recipe" },
    rating: { type: Number, required: true },
    name: { type: String, required: true },
    comment: { type: String, required: true },
  },
  { createdAt: true }
);

const Review = mongoose.model("Review", reviewModel);
module.exports = Review;
