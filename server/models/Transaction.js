const mongoose = require("mongoose");
const Category = require("./Category");

const transactionSchema = new mongoose.Schema({
  date: { type: Number, required: true },
  month: { type: Number, required: true },
  year: { type: Number, required: true },
  amount: { type: Number, required: true },
  vendor: { type: String, required: true },
  category: {
    type: mongoose.Schema.Types.ObjectId, 
    ref: "Category", required: true
  }
});

const Transaction = mongoose.model("Transaction", transactionSchema);

module.exports = Transaction;
