const express = require("express");
const bodyParser = require("body-parser");
const db = require("./utils/database");

const app = express();

const product = require("./routes/addData");

app.use(product);

app.listen(3004, () => {
  console.log("Listening");
});
