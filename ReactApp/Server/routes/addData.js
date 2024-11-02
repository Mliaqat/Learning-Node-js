const express = require("express");
const productController = require("../controllers/product");
const router = express.Router();

router.get("/product", productController.getProduct);
router.post("/product", productController.postAddProduct);

module.exports = router;
