const express = require("express")
const router = express.Router()

router.use("/tours", require("./tourRoutes"))
router.use("/auth", require("./authRoutes"))
router.use("/user", require("./userRoutes"))

module.exports = router;