const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema({
  date: { 
    type: Number, 
    required: true 
  },
  month: { 
    type: Number, 
    required: true 
  },
  year: { 
    type: Number, 
    required: true 
  },
  amount: { 
    type: Number, 
    required: true 
  },
  vendor: { 
    type: String, 
    required: true 
  },
  category: {
    type: mongoose.Schema.Types.ObjectId, 
    ref: "Category", 
    required: false
  }
});

// const Transaction = mongoose.model("Transaction", transactionSchema);

module.exports = transactionSchema;
