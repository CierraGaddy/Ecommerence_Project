import { getProducts } from "../Model/productModel.js";

// Controller function to fetch products from Supabase
export const fetchAllProducts = async (req, res) => {
  try {
    const filters = req.query || {}; // Get filters from query parameters
    const products = await getProducts(filters); // Fetch products with filters
    res.json(products); // Send JSON response
  } catch (err) {
    console.error("Error fetching products:", err.message);
    res
      .status(500)
      .json({ message: "Error fetching products", error: err.message });
  }
};
