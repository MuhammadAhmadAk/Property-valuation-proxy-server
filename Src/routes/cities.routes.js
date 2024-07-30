const express = require("express");
const router = express.Router();
const citycontroller = require("../controllers/cities_controller");

router.get("/cities", citycontroller.getCities);

module.exports = router;
