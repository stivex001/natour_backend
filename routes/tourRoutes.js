const express = require("express");

const tourController = require("../controllers/tourControllers");
const authController = require("../controllers/authController");

const router = express.Router();

router.get("/", authController.protectedRoute, tourController.getAllTours);
router.get("/tour-stats", tourController.getTourStats);

router.get("/monthly-plan/:year", tourController.getMonthlyPlan);
router.get("/:id", tourController.getTour);

router.post("/", tourController.createTour);
router.patch("/:id", tourController.updateTour);
router.delete("/:id", tourController.deleteTour);

module.exports = router;
