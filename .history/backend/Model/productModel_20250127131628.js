const db = require("../config/dbConfig");

// Get all products
const getProducts = async () => {
  try {
    const [rows] = await db.query("SELECT * FROM products"); // Use mysql2 promise API
    return rows; // Return the products
  } catch (err) {
    console.error("Error fetching products:", err.message);
    throw err; // Re-throw the error to be handled by the controller
  }
};

// Get a product by ID
const getProductById = async (id) => {
  try {
    const [rows] = await db.query("SELECT * FROM products WHERE id = ?", [id]);
    return rows[0]; // Return a single product or undefined if not found
  } catch (err) {
    console.error("Error fetching product by ID:", err.message);
    throw err; // Re-throw the error to be handled by the controller
  }
};

module.exports = {
  getProducts,
  getProductById, // Add this if you're fetching individual products
};
