const Product = require("../models/productModel");

const getAllProducts = (req, res) => {
  Product.getProducts()
    .then((products) => res.json(products))
    .catch((err) =>
      res.status(500).json({ message: "Error fetching products", error: err })
    );
};

const getProductById = (req, res) => {
  const { id } = req.params;
  Product.getProductById(id)
    .then((product) => {
      if (product) {
        res.json(product);
      } else {
        res.status(404).json({ message: "Product not found" });
      }
    })
    .catch((err) =>
      res.status(500).json({ message: "Error fetching product", error: err })
    );
};

module.exports = { getAllProducts, getProductById };
