const mongoose = require("mongoose");

// Schema for quote Document
const quoteSchema = mongoose.Schema({
  _id: Number,
  quote: String,
  author: String,
});

module.exports = quoteSchema;
