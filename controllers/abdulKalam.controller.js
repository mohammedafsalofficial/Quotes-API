const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/quotesDB");

const AbdulKalam = require("../models/abdulKalam.model.js");

const getAbdulKalamQuote = async (req, res) => {
  const totalDocuments = await AbdulKalam.countDocuments();
  const randomNumber = Math.floor(Math.random() * totalDocuments);
  const abdulKalamQuote = await AbdulKalam.findOne().skip(randomNumber).limit(1);
  res.json({
    quote: abdulKalamQuote.quote,
    author: abdulKalamQuote.author,
  });
};

module.exports = { getAbdulKalamQuote };
