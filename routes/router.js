const express = require("express")
const router = express.Router()

router.use("/tours", require("./tourRoutes"))
router.use("/auth", require("./authRoutes"))

module.exports = router;