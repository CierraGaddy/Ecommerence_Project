import { supabase } from "../config/supabaseClient";

export const fetchProducts = async (filters = {}) => {
  try {
    let query = supabase.from("products").select("*");

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
      console.error("Error fetching products from Supabase:", error.message);
      throw error;
    }

    console.log("Fetched Products:", data);
    return data || [];
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};
