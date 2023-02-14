const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: true,
    enum: [
      "toll",
      "food",
      "parking",
      "transport",
      "accommodation",
      "gasoline",
      "telecom",
      "miscellaneous"
    ]
  },
  sub: {
    type: String,
    enum: [
      "plane",
      "taxi",
      "train",
      "restaurant",
      "shopping",
    ]
  }
});

const Category = mongoose.model("Category", categorySchema);

module.exports = Category;
