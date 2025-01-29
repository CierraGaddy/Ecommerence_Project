const Product = require("../models/productModel");

// Fetch all products or apply filters
const getAllProducts = (req, res) => {
  const { category, minPrice, maxPrice } = req.query;

  // Validate query parameters
  if (minPrice && isNaN(minPrice)) {
    return res.status(400).json({ message: "Invalid minPrice value" });
  }
  if (maxPrice && isNaN(maxPrice)) {
    return res.status(400).json({ message: "Invalid maxPrice value" });
  }

  // Fetch products with optional filtering
  Product.getProducts({ category, minPrice, maxPrice })
    .then((products) => res.json(products))
    .catch((err) =>
      res
        .status(500)
        .json({ message: "Error fetching products", error: err.message })
    );
};

// Fetch product by ID
const getProductById = (req, res) => {
  const { id } = req.params;

  if (!Number.isInteger(parseInt(id, 10))) {
    return res.status(400).json({ message: "Invalid product ID" });
  }

  Product.getProductById(id)
    .then((product) => {
      if (product) {
        res.json(product);
      } else {
        res.status(404).json({ message: "Product not found" });
      }
    })
    .catch((err) =>
      res
        .status(500)
        .json({ message: "Error fetching product", error: err.message })
    );
};

module.exports = { getAllProducts, getProductById };
