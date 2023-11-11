const mongoose = require("mongoose");
const quoteSchema = require("./quote.schema");

// Create a collection for Prophet Muhammad's (PBUH) quotes
const ProphetMuhammad = mongoose.model("ProphetMuhammad", quoteSchema);

module.exports = ProphetMuhammad;
