import { getProducts, getProductById } from "../Model/productModel.js"; // Ensure correct import

// Fetch all products
export const fetchAllProducts = async (req, res) => {
  try {
    const filters = req.query || {};
    const products = await getProducts(filters);
    res.json(products);
  } catch (err) {
    console.error("Error fetching products:", err.message);
    res
      .status(500)
      .json({ message: "Error fetching products", error: err.message });
  }
};

// Fetch a product by ID
export const fetchProductById = async (req, res) => {
  const { id } = req.params;

  try {
    const product = await getProductById(id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.json(product);
  } catch (err) {
    console.error("Error fetching product by ID:", err.message);
    res
      .status(500)
      .json({ message: "Error fetching product by ID", error: err.message });
  }
};
