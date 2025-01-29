import express from "express";
import { fetchAllProducts } from "../controllers/productController.js";

const router = express.Router();

// Define API route to fetch products
router.get("/filter", fetchAllProducts);

export default router;
