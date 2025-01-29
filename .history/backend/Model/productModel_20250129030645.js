import sql from "../config/dbConfig.js"; // Import Supabase database connection

// Function to fetch products with optional filtering
export const getProducts = async (filters) => {
  let query = sql`SELECT * FROM products WHERE 1=1`; // Base query

  // Apply filters dynamically
  if (filters.category && filters.category.trim() !== "") {
    query = sql`${query} AND category = ${filters.category.trim()}`;
  }
  if (filters.minPrice) {
    query = sql`${query} AND price >= ${parseFloat(filters.minPrice)}`;
  }
  if (filters.maxPrice) {
    query = sql`${query} AND price <= ${parseFloat(filters.maxPrice)}`;
  }

  try {
    return await query; // Execute query
  } catch (error) {
    console.error("Error executing query:", error.message);
    throw error;
  }
};
