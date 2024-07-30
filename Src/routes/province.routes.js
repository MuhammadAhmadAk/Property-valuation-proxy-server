const express = require("express");
const router = express.Router();
const provinceController = require("../controllers/province_controller");

router.get("/provinces", provinceController.getProvinces);

module.exports = router;
