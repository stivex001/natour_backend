const mongoose = require("mongoose");
const dotenv = require("dotenv");

const app = require("./index");

dotenv.config();

const port = process.env.PORT || 3000;

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Connected to DB Successfully"))
  .catch((err) => console.log("Couldn't connect to MongoDB", err));

app.listen(port, () => {
  console.log(`App running on Port ${port}`);
});
