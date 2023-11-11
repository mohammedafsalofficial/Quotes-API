const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/quotesDB");

const Buddha = require("../models/buddha.model.js");

const getBuddhaQuote = async (req, res) => {
  const totalDocuments = await Buddha.countDocuments();
  const randomNumber = Math.floor(Math.random() * totalDocuments);
  const buddhaQuote = await Buddha.findOne().skip(randomNumber).limit(1);
  res.json({
    quote: buddhaQuote.quote,
    author: buddhaQuote.author,
  });
};

module.exports = { getBuddhaQuote };
