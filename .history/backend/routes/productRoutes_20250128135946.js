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

  // Validate input parameters
  if (minPrice && isNaN(minPrice)) {
    return res.status(400).json({ error: "Invalid minPrice value" });
  }
  if (maxPrice && isNaN(maxPrice)) {
    return res.status(400).json({ error: "Invalid maxPrice value" });
  }

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

  console.log("Query being executed:", query);

  try {
    const [filteredProducts] = await db.promise().query(query);
    res.json(filteredProducts);
  } catch (err) {
    console.error("Database error:", err);
    res.status(500).json({ error: "Failed to filter products" });
  }
});

export default router;
