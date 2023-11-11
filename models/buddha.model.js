const mongoose = require("mongoose");
const quoteSchema = require("./quote.schema");

// Create a collection for Buddha's quotes
const Buddha = mongoose.model("Buddha", quoteSchema);

module.exports = Buddha;
