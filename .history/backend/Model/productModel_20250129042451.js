import supabase from "../config/dbConfig.js"; //  Import the Supabase client

// Function to fetch products (with optional filters)
export const getProducts = async (filters) => {
  let query = supabase.from("products").select("*");

  //  Apply filters if they exist
  if (filters.category && filters.category.trim() !== "") {
    query = query.eq("category", filters.category.trim());
  }
  if (filters.minPrice) {
    query = query.gte("price", parseFloat(filters.minPrice));
  }
  if (filters.maxPrice) {
    query = query.lte("price", parseFloat(filters.maxPrice));
  }

  try {
    const { data, error } = await query;

    if (error) {
      throw error;
    }

    return data;
  } catch (error) {
    console.error("Error fetching products:", error.message);
    throw error;
  }
};
