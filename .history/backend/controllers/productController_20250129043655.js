import { getProducts, getProductById } from "../Model/productModel.js";

// Function to fetch all products (or filtered ones if provided)
export const fetchAllProducts = async (req, res) => {
  try {
    const filters = req.query || {}; // Retrieve filters from request query parameters
    const products = await getProducts(filters); // Fetch products from the database

    if (!products || products.length === 0) {
      return res.status(404).json({ message: "No products found" });
    }

    res.json(products); // Send products as JSON response
  } catch (err) {
    console.error("Error fetching products:", err.message);
    res.status(500).json({
      message: "Error fetching products",
      error: err.message,
    });
  }
};

// Function to fetch a product by ID
export const fetchProductById = async (req, res) => {
  const { id } = req.params; // Extract product ID from URL parameters

  // Validate that ID is a positive integer
  if (!id || isNaN(id) || parseInt(id) <= 0) {
    return res.status(400).json({ message: "Invalid product ID" });
  }

  try {
    const product = await getProductById(parseInt(id)); // Fetch product from the database

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.json(product); // Return product details as JSON response
  } catch (err) {
    console.error("Error fetching product by ID:", err.message);
    res.status(500).json({
      message: "Error fetching product by ID",
      error: err.message,
    });
  }
};
