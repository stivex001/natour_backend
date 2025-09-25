const express = require("express");
const tourController = require("../controllers/tourControllers");

const router = express.Router();

router.get("/", tourController.getAllTours);
router.get("/tour-stats", tourController.getTourStats);


router.get("/:id", tourController.getTour);

router.post("/", tourController.createTour);
router.patch("/:id", tourController.updateTour);
router.delete("/:id", tourController.deleteTour);

module.exports = router;
