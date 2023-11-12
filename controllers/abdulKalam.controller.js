const mongoose = require("mongoose");

mongoose.connect(process.env.DATABASE_URL);

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
