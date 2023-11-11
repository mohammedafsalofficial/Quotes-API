const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/quotesDB");

const ProphetMuhammad = require("../models/prophetMuhammad.model.js");

const getProphetMuhammadQuote = async (req, res) => {
  const totalDocuments = await ProphetMuhammad.countDocuments();
  const randomNumber = Math.floor(Math.random() * totalDocuments);
  const prophetMuhammadQuote = await ProphetMuhammad.findOne().skip(randomNumber).limit(1);
  res.json({
    quote: prophetMuhammadQuote.quote,
    author: prophetMuhammadQuote.author,
  });
};

module.exports = { getProphetMuhammadQuote };
