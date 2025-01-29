import { supabase } from "../config/dbConfig.js"; // Ensure Supabase client is imported

// Function to fetch all products with optional filtering
export const getProducts = async ({ category, minPrice, maxPrice }) => {
  let query = supabase.from("products").select("*");

  if (category) {
    query = query.eq("category", category);
  }
  if (minPrice) {
    query = query.gte("price", minPrice);
  }
  if (maxPrice) {
    query = query.lte("price", maxPrice);
  }

  const { data, error } = await query;
  if (error) {
    throw new Error(error.message);
  }
  return data;
};

// Function to fetch a product by ID
export const getProductById = async (id) => {
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    throw new Error(error.message);
  }
  return data;
};
