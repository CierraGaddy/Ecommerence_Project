import express from "express";
import { getProducts } from "../models/productModel.js"; // Ensure correct path

const router = express.Router();

// Route to filter products
router.get("/filter", async (req, res) => {
  const { category, minPrice, maxPrice } = req.query;

  try {
    const products = await getProducts({ category, minPrice, maxPrice });
    res.json(products);
  } catch (error) {
    console.error("Error filtering products:", error.message);
    res
      .status(500)
      .json({ message: "Failed to filter products", error: error.message });
  }
});

export default router;
