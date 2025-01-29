import axios from "axios"; // Import Axios for making HTTP requests

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:5000",
  // This sets the base URL for all requests.
  // If `VITE_API_URL` is defined in the environment, it uses that; otherwise, it defaults to localhost.

  headers: {
    "Content-Type": "application/json", // Ensures requests send data in JSON format
  },
});

// Function to fetch all products from the API
export const fetchProducts = async () => {
  try {
    const response = await api.get("/api/products"); // Sends a GET request to fetch products
    return response.data; // Returns the data received from the API
  } catch (error) {
    console.error("Error fetching products:", error); // Logs an error if the request fails
    throw error; // Throws the error so it can be handled elsewhere
  }
};
