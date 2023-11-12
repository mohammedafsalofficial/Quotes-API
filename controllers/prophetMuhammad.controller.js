const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connect(process.env.DATABASE_URL);

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
