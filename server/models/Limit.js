const mongoose = require("mongoose");

const limitSchema = new mongoose.Schema(
  {
    month: { type: Number, required: true },
    year: { type: Number, required: true },
    limitAmount: { type: Number, required: true },
  }
)

const Limit = mongoose.model("Limit", limitSchema);

module.exports = Limit;
