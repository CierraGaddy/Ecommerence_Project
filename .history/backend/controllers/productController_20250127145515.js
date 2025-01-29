const getProductById = (req, res) => {
  const { id } = req.params;

  // Validate ID (ensure it's a positive integer)
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
      res.status(500).json({ message: "Error fetching product", error: err })
    );
};
