import pool from "../config/dbConfig.js"; // Ensure correct import

// Fetch products with optional filters
export const getProducts = async (filters) => {
  let query = "SELECT * FROM products WHERE 1=1"; // Start query
  const params = [];

  if (filters.category && filters.category.trim() !== "") {
    query += " AND category = ?";
    params.push(filters.category.trim()); // Add category filter
  }
  if (filters.minPrice && !isNaN(filters.minPrice)) {
    query += " AND price >= ?";
    params.push(parseFloat(filters.minPrice)); // Add min price filter
  }
  if (filters.maxPrice && !isNaN(filters.maxPrice)) {
    query += " AND price <= ?";
    params.push(parseFloat(filters.maxPrice)); // Add max price filter
  }

  try {
    console.log("Executing query:", query, params); // Debugging
    const [results] = await pool.query(query, params); // Use pool.query() for async
    return results;
  } catch (err) {
    console.error("Error executing query:", err.message);
    throw err;
  }
};
