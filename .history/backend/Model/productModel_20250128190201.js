import pool from "../config/dbConfig.js"; // Import the MySQL pool from dbConfig.js

// Fetch products with optional filters
export const getProducts = async (filters) => {
  let query = "SELECT * FROM products WHERE 1=1";
  const params = [];

  if (filters.category && filters.category.trim() !== "") {
    query += " AND category = ?";
    params.push(filters.category.trim());
  }
  if (filters.minPrice) {
    query += " AND price >= ?";
    params.push(parseFloat(filters.minPrice));
  }
  if (filters.maxPrice) {
    query += " AND price <= ?";
    params.push(parseFloat(filters.maxPrice));
  }

  try {
    const [results] = await pool.query(query, params); // Use pool.query() instead of db.query()
    return results;
  } catch (err) {
    console.error("Error executing query:", err.message);
    throw err; // Rethrow the error for the calling function to handle
  }
};

// Fetch a single product by ID
export const getProductById = async (id) => {
  if (!id || isNaN(id)) {
    throw new Error("Invalid product ID");
  }

  try {
    const query = "SELECT * FROM products WHERE id = ?";
    const [results] = await pool.query(query, [parseInt(id, 10)]); // Use pool.query() here as well
    return results[0] || null; // Return the first product or null if not found
  } catch (err) {
    console.error("Error executing query:", err.message);
    throw err;
  }
};
