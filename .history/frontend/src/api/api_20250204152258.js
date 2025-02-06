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
    const params = new URLSearchParams(filters).toString();
    const url = `/api/products${params ? `?${params}` : ""}`; // Ensure correct URL format
    console.log("Fetching from API:", url); // Debugging log

    const response = await api.get(url);
    console.log("API Response:", response.data); // Log response

    return response.data;
  } catch (error) {
    console.error(
      "Error fetching products:",
      error.response?.data || error.message
    );
    throw error;
  }
};
