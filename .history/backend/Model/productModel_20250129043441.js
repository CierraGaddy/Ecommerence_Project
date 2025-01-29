import { supabase } from "../config/dbConfig.js"; // Ensure correct import

export const getProducts = async (filters) => {
  let query = supabase.from("public.products").select("*"); // Explicitly reference schema

  if (filters.category && filters.category.trim() !== "") {
    query = query.eq("category", filters.category.trim());
  }
  if (filters.minPrice) {
    query = query.gte("price", parseFloat(filters.minPrice));
  }
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
