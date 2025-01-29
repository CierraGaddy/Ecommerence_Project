import { supabase } from "../config/dbConfig.js"; // Ensure Supabase client is correctly imported

// Function to fetch products from Supabase with optional filters
export const getProducts = async (filters) => {
  let query = supabase.from("products").select("*"); // Select all columns from the "products" table

  // Apply filters if provided
  if (filters.category && filters.category.trim() !== "") {
    query = query.eq("category", filters.category.trim()); // Filter by category
  }
  if (filters.minPrice) {
    query = query.gte("price", parseFloat(filters.minPrice)); // Greater than or equal to minPrice
  }
  if (filters.maxPrice) {
    query = query.lte("price", parseFloat(filters.maxPrice)); // Less than or equal to maxPrice
  }

  const { data, error } = await query;

  if (error) {
    console.error("Error fetching products:", error.message);
    throw error;
  }

  return data || []; // Return data or an empty array if no products found
};
