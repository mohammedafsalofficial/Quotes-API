const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/quotesDB");

const ProphetMuhammad = require("../models/prophetMuhammad.model.js");
const AbdulKalam = require("../models/abdulKalam.model.js");
const Buddha = require("../models/buddha.model.js");

const prophetMuhammadCollection = ProphetMuhammad.collection;

const prophetMuhammadQuotes = [
  {
    quote: "A good man treats women with honour.",
  },
  {
    quote: "Strive always to excel in virtue and truth.",
  },
  {
    quote:
      "The greatest jihad (struggle/striving) is to battle your own soul, to fight the evil within yourself.",
  },
  {
    quote: "The strongest among you is the one who controls his anger.",
  },
  {
    quote:
      "God does not look at your forms and possessions but he looks at your hearts and your deeds.",
  },
];

prophetMuhammadCollection.insertMany(prophetMuhammadQuotes);

const getQuotes = (req, res) => {
  res.json({
    _id: 1,
    quote:
      "The best of people is the one who is most beneficial to people. - Prophet Muhammad (peace be upon him)",
  });
};

module.exports = { getQuotes };
