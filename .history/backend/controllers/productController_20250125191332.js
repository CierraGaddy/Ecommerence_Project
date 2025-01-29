// /backend/controllers/productsController.js

const Product = require("../models/productModel");

const getAllProducts = (req, res) => {
  Product.getProducts()
    .then((products) => res.json(products))
    .catch((err) =>
      res.status(500).json({ message: "Error fetching products", error: err })
    );
};

module.exports = {
  getAllProducts,
};
