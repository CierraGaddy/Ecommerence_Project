import express from "express";
import {
  getAllProducts,
  getProductById,
} from "../controllers/productController.js";

const router = express.Router();

router.get("/", getAllProducts); // Fetch all products
router.get("/:id", getProductById); // Fetch a product by ID

export default router;
