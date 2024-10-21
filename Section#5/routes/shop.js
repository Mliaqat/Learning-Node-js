const express = require("express");

const router = express.Router();

router.get("/", (req, res, next) => {
  console.log("1");
  res.send("<h1>Hi I am a new User</h1>");
});

module.exports = router;
