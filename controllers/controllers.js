const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/quotesDB");

const ProphetMuhammad = require("../models/prophetMuhammad.model.js");
const AbdulKalam = require("../models/abdulKalam.model.js");

const getQuotes = (req, res) => {
  res.json({
    _id: 1,
    quote:
      "The best of people is the one who is most beneficial to people. - Prophet Muhammad (peace be upon him)",
  });
};

module.exports = { getQuotes };
