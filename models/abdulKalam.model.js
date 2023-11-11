const mongoose = require("mongoose");
const quoteSchema = require("./quote.schema");

// Create a collection for Abdul Kalam's quotes
const AbdulKalam = mongoose.model("AbdulKalam", quoteSchema);

module.exports = AbdulKalam;
