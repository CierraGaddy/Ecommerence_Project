import promisePool from "../config/dbConfig.js";

// Function to fetch products with optional filtering
export const getProducts = async (filters) => {
  let query = "SELECT * FROM products WHERE 1=1";
  const params = [];
  // Adds category filter if provided

  if (filters.category && filters.category.trim() !== "") {
    query += " AND category = ?";
    params.push(filters.category.trim());
  }
  // Adds minimum price filter if provided

  if (filters.minPrice) {
    query += " AND price >= ?";
    params.push(parseFloat(filters.minPrice));
  }
  if (filters.maxPrice) {
    query += " AND price <= ?";
    params.push(parseFloat(filters.maxPrice));
  }

  try {
    const [results] = await promisePool.execute(query, params);
    return results;
  } catch (error) {
    console.error("Error executing query:", error.message);
    throw error;
  }
};
