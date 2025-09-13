const express = require("express");
const tourController = require("../controllers/tourControllers");

const router = express.Router();

router.get("/", tourController.getAllTours);

module.exports = router;
