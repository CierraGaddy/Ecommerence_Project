import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:5000", // Fallback to localhost
  headers: {
    "Content-Type": "application/json",
  },
});

export const fetchProducts = async () => {
  try {
    const response = await api.get("/api/products"); // Updated path
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};
