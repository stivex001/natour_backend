const express = require("express");
const userController = require("../controllers/userController");
const authController = require("../controllers/authController");

const router = express.Router();


router.patch("/updateProfile", authController.protectedRoute, userController.updateProfile);
router.delete("/deleteMyAccount", authController.protectedRoute, userController.deleteMyAccount);

module.exports = router;
