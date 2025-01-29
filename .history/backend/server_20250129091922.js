import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import productRoutes from "./routes/productRoutes.js"; // Corrected path
import path from "path";
import { fileURLToPath } from "url";

dotenv.config(); // Load environment variables

const app = express();
const port = process.env.PORT || 5000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "")));
// Use product routes
app.use("/api/products", productRoutes);

// Start server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
