// food.js (Model update)
const mongoose = require("mongoose");

const FoodSchema = new mongoose.Schema({
  foodName: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true } // Added image field
});

const Food = mongoose.model("Food", FoodSchema);
module.exports = Food;
