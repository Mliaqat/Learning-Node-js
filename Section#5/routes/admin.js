const express = require("express");

const router = express.Router();

router.get("/add-product", (req, res, next) => {
  res.send(
    "<body><h1>Hello</h1><br></br><form action='/product' method='POST'><input type='text' name='message'><button type='submit'>Submit</button></form></body>"
  );
});

router.post("/product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

module.exports = router;
