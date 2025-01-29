// /frontend/src/api/api.js

import axios from "axios";

// Set up the Axios instance with the API base URL from .env
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:5000", // Fallback to localhost
  headers: {
    "Content-Type": "application/json",
  },
});

// Fetch all products
export const fetchProducts = async () => {
  try {
    const response = await api.get("/products");
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};
