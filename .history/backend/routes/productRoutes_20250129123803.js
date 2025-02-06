//Sets API endpoints
import express from "express";
import { fetchAllProducts } from "../controllers/productController.js";

const router = express.Router();

// Define API route to fetch products
router.get("/filter", fetchAllProducts); //returns filtered products.

export default router;
