const express = require("express");
const morgan = require("morgan");
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const mongoSanitize = require("express-mongo-sanitize");
const xss = require("xss-clean");

const routes = require("./routes/router");
const globalErrorHandler = require("./controllers/errorController");

const app = express();

app.use(mongoSanitize());
app.use(xss());
// Global Middlewares
app.use(helmet());
// Development logging
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

const limiter = rateLimit({
  max: 100,
  windowMs: 60 * 60 * 1000,
  message: "Too many requests from this IP, please try again in an hour!",
});

app.use("/api", limiter);
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
