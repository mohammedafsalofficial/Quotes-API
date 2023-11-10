const mongoose = require("mongoose");
const quoteSchema = require("./quoteSchema");

const ProphetMuhammad = mongoose.model("ProphetMuhammad", quoteSchema);

module.exports = ProphetMuhammad;
