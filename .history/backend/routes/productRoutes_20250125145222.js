import express from "express";
import {
  getProducts,
  getProductById,
} from "../controllers/productController.js";

const router = express.Router();

// Define product routes
router.get("/", getProducts); // Get all products
router.get("/:id", getProductById); // Get product by id

export default router;
