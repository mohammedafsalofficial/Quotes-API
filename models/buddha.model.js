const mongoose = require("mongoose");
const quoteSchema = require("./quoteSchema");

const Buddha = mongoose.model("Buddha", quoteSchema);

module.exports = Buddha;
