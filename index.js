const express = require("express");
const routes = require("./routes/router");

const app = express();

app.use(express.json());

app.use("/api/v1", routes);

module.exports = app


