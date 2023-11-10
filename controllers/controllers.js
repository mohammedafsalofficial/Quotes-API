const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/quotesDB");

const ProphetMuhammad = require("../models/prophetMuhammad.model.js");
const AbdulKalam = require("../models/abdulKalam.model.js");
const Buddha = require("../models/buddha.model.js");

const abdulKalamCollection = AbdulKalam.collection;

const abdulKalamQuotes = [
  {
    quote: "If you want to shine like a sun, first burn like a sun.",
  },
  {
    quote: "To succeed in your mission, you must have single-minded devotion to your goal.",
  },
  {
    quote:
      "If four things are followed - having a great aim, acquiring knowledge, hard work, and perseverance - then anything can be achieved.",
  },
  {
    quote:
      "Don't take rest after your first victory because if you fail in second, more lips are waiting to say that your first victory was just luck.",
  },
  {
    quote:
      "Dream is not that which you see while sleeping it is something that does not let you sleep.",
  },
  {
    quote: "A big shot is a little shot who keeps on shooting, so keep trying.",
  },
  {
    quote: "Small aim is a crime; have great aim.",
  },
];

abdulKalamCollection.insertMany(abdulKalamQuotes);

const getQuotes = (req, res) => {
  res.json({
    _id: 1,
    quote:
      "The best of people is the one who is most beneficial to people. - Prophet Muhammad (peace be upon him)",
  });
};

module.exports = { getQuotes };
