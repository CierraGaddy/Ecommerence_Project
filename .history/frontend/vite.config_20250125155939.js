import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // Remove the /api prefix here
      "/": "http://localhost:5000", // Proxy everything to the backend without /api
    },
  },
});
