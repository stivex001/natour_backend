const dotenv = require("dotenv");
dotenv.config();
const app = require("./index");


const port = process.env.PORT || 3000;
console.log(process.env.NODE_ENV)

app.listen(port, () => {
  console.log(`App running on Port ${port}`);
});
