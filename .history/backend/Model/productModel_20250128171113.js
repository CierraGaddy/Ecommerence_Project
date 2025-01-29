import pool from "../config/dbConfig.js";

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
    const [results] = await pool.query(query, params);
    return results;
  } catch (err) {
    console.error("Error executing query:", err.message);
    throw err;
  }
};

export const getProductById = async (id) => {
  if (!id || isNaN(id)) {
    throw new Error("Invalid product ID");
  }

  try {
    const query = "SELECT * FROM products WHERE id = ?";
    const [results] = await pool.query(query, [parseInt(id, 10)]);
    return results[0] || null;
  } catch (err) {
    console.error("Error executing query:", err.message);
    throw err;
  }
};
