const express = require("express");
const router = express.Router();

const controllers = require("../controllers/controllers");

router.get("/quotes", controllers.getQuotes);

module.exports = router;
  