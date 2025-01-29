import express from "express";
import {
  getAllProducts,
  getProductById,
} from "../controllers/productController.js";
import db from "../config/dbConfig.js";

const router = express.Router();

router.get("/", getAllProducts);
router.get("/:id", getProductById);

// Filtering route
router.get("/filter", async (req, res) => {
  const { category, minPrice, maxPrice } = req.query;

  if (minPrice && isNaN(minPrice)) {
    return res.status(400).json({ error: "Invalid minPrice value" });
  }
  if (maxPrice && isNaN(maxPrice)) {
    return res.status(400).json({ error: "Invalid maxPrice value" });
  }

  let query = "SELECT * FROM products WHERE 1=1";
  const params = [];

  if (category && category.trim() !== "") {
    query += " AND category = ?";
    params.push(category.trim());
  }
  if (minPrice) {
    query += " AND price >= ?";
    params.push(parseFloat(minPrice));
  }
  if (maxPrice) {
    query += " AND price <= ?";
    params.push(parseFloat(maxPrice));
  }

  console.log("Executing query:", query, params);

  try {
    const [filteredProducts] = await db.query(query, params);
    res.json(filteredProducts);
  } catch (err) {
    console.error("Error executing query:", err.message);
    res.status(500).json({ error: "Failed to filter products" });
  }
});

export default router;
