const mongoose = require("mongoose");

const limitSchema = new mongoose.Schema(
  {
    
    amount: { type: Number, required: true },
  }
)

const Limit = mongoose.model("Limit", limitSchema);

module.exports = Limit;
