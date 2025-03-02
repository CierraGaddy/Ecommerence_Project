import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), ""); // Load environment variables

  return {
    plugins: [react()],
    define: {
      "process.env": env, // Define process.env to access variables like VITE_API_URL
    },
    esbuild: {
      loader: {
        ".js": "jsx",
      },
    },
  };
});
