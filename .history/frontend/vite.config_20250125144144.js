import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // Assuming your API routes in the backend start with `/api`
      "/api": "http://localhost:5000",
    },
  },
});
