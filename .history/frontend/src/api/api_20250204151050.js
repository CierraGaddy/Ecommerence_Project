import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:5000",
  headers: {
    "Content-Type": "application/json",
  },
});

// Function to fetch products with optional filters
export const fetchProducts = async (filters = {}) => {
  try {
    const params = new URLSearchParams(filters).toString(); // Convert filters into query string
    const response = await api.get(`/api/products?${params}`); // Send query params
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};
