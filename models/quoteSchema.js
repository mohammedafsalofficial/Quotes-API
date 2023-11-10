const mongoose = require("mongoose");

const quoteSchema = mongoose.Schema({
  _id: Number,
  quote: String,
});

module.exports = quoteSchema;
