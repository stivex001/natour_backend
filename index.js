const express = require("express");
const routes = require("./routes/router");

const globalErrorHandler = require("./controllers/errorController");

const app = express();

app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

app.use("/api/v1", routes);

// app.all("*", (req, res, next) => {
//   res.status(404).json({
//     status: "fail",
//     message: `Can't find ${req.originalUrl} on this server!`,
//   });
//   next()
// });

app.use(globalErrorHandler);

module.exports = app;
