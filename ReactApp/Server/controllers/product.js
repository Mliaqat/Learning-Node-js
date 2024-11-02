const db = require("../utils/database");

exports.getProduct = (req, res, next) => {
  db.execute("SELECT * FROM product")
    .then(([rows, fieldData]) => {
      res.status(200).send(rows);
    })
    .catch((error) => console.log(error));
};

exports.postAddProduct = (req, res, next) => {
  const name = req.body.name;
  db.execute("INSERT INTO product (name) VALUES (?)", [name])
    .then(() => {
      res.status(201).send("Product Created");
    })
    .catch(() => {});
  product.save();
  res.redirect("/");
};
