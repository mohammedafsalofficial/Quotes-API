const express = require("express");
const router = express.Router();

const prophetMuhammadController = require("../controllers/prophetMuhammad.controller");
const abdulKalamController = require("../controllers/abdulKalam.controller");
const buddhaController = require("../controllers/buddha.controller");

router.get("/quotes/prophetMuhammad", prophetMuhammadController.getProphetMuhammadQuote);

router.get("/quotes/abdulKalam", abdulKalamController.getAbdulKalamQuote);

router.get("/quotes/buddha", buddhaController.getBuddhaQuote);

module.exports = router;
