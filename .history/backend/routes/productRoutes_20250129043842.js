import express from "express";
import {
  fetchAllProducts,
  fetchProductById,
} from "../controllers/productController.js"; // Ensure correct import

const router = express.Router(); // Creates an Express router to define API endpoints

// Route to get all products or filter based on category, minPrice, and maxPrice
router.get("/filter", fetchAllProducts);

// Route to fetch a specific product by ID
router.get("/:id", fetchProductById);

export default router; // Exports the router so it can be used in server.js
