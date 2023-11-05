const express = require("express");
const recipeRoute = require("./routes/recipeRoute");
const favoriteRoute = require("./routes/favoriteRoute");
const cors = require("cors");

const dotenv = require("dotenv");
const mongoose = require("mongoose");
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());
app.use("/api/recipe", recipeRoute);
app.use("/api/favorite", favoriteRoute);

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB connected");
  })
  .catch((error) => {
    console.log(error);
  });

app.listen(process.env.PORT, () => {
  console.log(`server started at ${process.env.PORT}`);
});
