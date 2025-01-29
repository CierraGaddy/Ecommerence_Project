import promisePool from "../config/dbConfig.js"; // Ensure promisePool is correctly imported

export const getProducts = async (filters) => {
  let query = "SELECT * FROM products WHERE 1=1"; // Base query
  const params = [];

  // Add dynamic filters
  if (filters.category && filters.category.trim() !== "") {
    query += " AND category = ?";
    params.push(filters.category.trim());
  }
  if (filters.minPrice && !isNaN(filters.minPrice)) {
    query += " AND price >= ?";
    params.push(parseFloat(filters.minPrice));
  }
  if (filters.maxPrice && !isNaN(filters.maxPrice)) {
    query += " AND price <= ?";
    params.push(parseFloat(filters.maxPrice));
  }

  console.log("Executing query:", query, params); // Debug log

  try {
    const [results] = await promisePool.query(query, params); // Execute query
    return results;
  } catch (err) {
    console.error("Error executing query:", err.message); // Log SQL error
    throw err;
  }
};
