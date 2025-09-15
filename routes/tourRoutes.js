const express = require("express");
const tourController = require("../controllers/tourControllers");

const router = express.Router();

router.get("/", tourController.getAllTours);
router.get("/:id", tourController.getTour);

router.patch("/:id", tourController.updateTour);
router.post("/", tourController.createTour);

module.exports = router;
