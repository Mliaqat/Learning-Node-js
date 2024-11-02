const db = require("../utils/database");

exports.getProduct = (req, res, next) => {
  db.execute("SELECT * FROM product")
    .then(([rows, fieldData]) => {
      res.status(200).send(rows);
    })
    .catch((error) => console.log(error));
};

exports.postAddProduct = (req, res, next) => {
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;
  // const product = new Product(null, title, imageUrl, description, price);
  product.save();
  res.redirect("/");
};
