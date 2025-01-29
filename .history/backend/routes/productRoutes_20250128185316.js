import express from "express";
import {
  fetchAllProducts,
  fetchProductById,
} from "../controllers/productController.js";

const router = express.Router();

router.get("/", fetchAllProducts); // Fetch all products
router.get("/:id", fetchProductById); // Fetch a product by ID

export default router;
