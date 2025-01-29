import express from "express";
import {
  fetchAllProducts,
  fetchProductById,
} from "../controllers/productController.js";

const router = express.Router();

router.get("/", fetchAllProducts); // Route to get all products
router.get("/:id", fetchProductById); // Route to get a product by ID

export default router;
