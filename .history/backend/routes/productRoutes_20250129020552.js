import express from "express";
import { getProducts } from "../Model/productModel.js";

const router = express.Router(); // Creates an Express router to define API endpoints

// Route to filter products based on category, minPrice, and maxPrice
router.get("/filter", async (req, res) => {
  // Extracts query parameters from the request URL
  const { category, minPrice, maxPrice } = req.query;

  try {
    // Calls the function to fetch filtered products from the database
    const products = await getProducts({ category, minPrice, maxPrice });

    // Sends the filtered product list as a JSON response
    res.json(products);
  } catch (error) {
    console.error("Error filtering products:", error.message); // Logs any errors to the console
    res.status(500).json({
      message: "Failed to filter products", // Sends an error response if something goes wrong
      error: error.message,
    });
  }
});

export default router; // Exports the router so it can be used in server.js
