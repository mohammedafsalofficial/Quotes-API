const mongoose = require("mongoose");
const quoteSchema = require("./quoteSchema");

const AbdulKalam = mongoose.model("AbdulKalam", quoteSchema);

module.exports = AbdulKalam;
