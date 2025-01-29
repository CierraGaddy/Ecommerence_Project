import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Load environment variables from .env files
  const env = loadEnv(mode, process.cwd());

  return {
    plugins: [react()],
    esbuild: {
      loader: {
        ".js": "jsx", // Treat .js files as JSX
      },
    },
    server: {
      proxy: {
        "/api": {
          target: "http://localhost:5000", // Proxy API requests to the backend
          changeOrigin: true,
          secure: false,
        },
      },
    },
  };
});
