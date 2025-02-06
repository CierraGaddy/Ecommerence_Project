//backend entry point
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import productRoutes from "./routes/productRoutes.js"; // Corrected path
import path from "path";
import { fileURLToPath } from "url";
import { supabase } from "./config/supabaseClient.js";

const testDatabase = async () => {
  const { data, error } = await supabase.from("products").select("*").limit(1);
  if (error) console.error("Supabase connection error:", error);
  else console.log("Supabase test data:", data);
};

testDatabase();

dotenv.config(); // Load environment variables

const app = express();
const port = process.env.PORT || 5000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "../frontend/public")));
app.use(express.static(path.join(__dirname, "../frontend/dist")));

// Use product routes for API request
app.use("/api/products", productRoutes);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
});

// Start server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
