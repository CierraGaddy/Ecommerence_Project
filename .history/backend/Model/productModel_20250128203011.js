import promisePool from "../config/dbConfig.js"; // Ensure you are using the correct database connection

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
    const [results] = await promisePool.execute(query, params); // Fix: Use `execute` instead of `query`
    return results;
  } catch (error) {
    console.error("Error executing query:", error.message);
    throw error;
  }
};
