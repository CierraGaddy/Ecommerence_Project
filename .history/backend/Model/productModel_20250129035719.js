import sql from "../config/dbConfig.js";

// Function to fetch products with optional filtering
export const getProducts = async (filters) => {
  let query = "SELECT * FROM products WHERE 1=1";
  const params = [];

  if (filters.category && filters.category.trim() !== "") {
    query += " AND category = $1";
    params.push(filters.category.trim());
  }
  if (filters.minPrice) {
    query += " AND price >= $2";
    params.push(parseFloat(filters.minPrice));
  }
  if (filters.maxPrice) {
    query += " AND price <= $3";
    params.push(parseFloat(filters.maxPrice));
  }

  try {
    const products = await sql(query, ...params);
    return products;
  } catch (error) {
    console.error("Error executing query:", error.message);
    throw error;
  }
};
