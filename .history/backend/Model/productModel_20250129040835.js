import { supabase } from "../config/dbConfig.js"; // Import Supabase client

// Function to fetch products with optional filtering
export const getProducts = async (filters) => {
  let query = supabase.from("products").select("*"); // Start query

  // Apply category filter if provided
  if (filters.category && filters.category.trim() !== "") {
    query = query.eq("category", filters.category.trim());
  }

  // Apply minimum price filter if provided
  if (filters.minPrice) {
    query = query.gte("price", parseFloat(filters.minPrice));
  }

  // Apply maximum price filter if provided
  if (filters.maxPrice) {
    query = query.lte("price", parseFloat(filters.maxPrice));
  }

  const { data, error } = await query;

  if (error) {
    console.error("Error executing query:", error.message);
    throw error;
  }

  return data;
};

// Function to fetch a product by ID
export const getProductById = async (id) => {
  if (!id || isNaN(id)) {
    throw new Error("Invalid product ID");
  }

  const { data, error } = await supabase
    .from("products")
    .select("*")
    .eq("id", parseInt(id, 10))
    .single();

  if (error) {
    console.error("Error fetching product by ID:", error.message);
    throw error;
  }

  return data;
};
