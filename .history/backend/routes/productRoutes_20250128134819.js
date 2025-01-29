import express from "express";
import {
  getAllProducts,
  getProductById,
} from "../controllers/productController.js";

const router = express.Router();

// Existing Routes
router.get("/", getAllProducts); // Fetch all products
router.get("/:id", getProductById); // Fetch a product by ID

// New Route for Filtering Products
router.get("/filter", async (req, res) => {
  const { category, minPrice, maxPrice } = req.query;
  let query = "SELECT * FROM products WHERE 1=1";

  if (category) {
    query += ` AND category = '${category}'`;
  }
  if (minPrice) {
    query += ` AND price >= ${parseFloat(minPrice)}`;
  }
  if (maxPrice) {
    query += ` AND price <= ${parseFloat(maxPrice)}`;
  }

  try {
    const [filteredProducts] = await db.promise().query(query);
    console.log("Filtered Query:", query); // Log the query for debugging
    res.json(filteredProducts);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to filter products" });
  }
});

export default router;
