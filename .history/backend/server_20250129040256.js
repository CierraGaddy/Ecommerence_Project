import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import sql from "./config/dbConfig.js"; // Import the database connection
import productRoutes from "./routes/productRoutes.js"; // Ensure product routes are imported

dotenv.config(); // Load environment variables

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// API Routes
app.use("/api/products", productRoutes); // Correctly using product routes

// Test database connection route
app.get("/test-db", async (req, res) => {
  try {
    const result = await sql`SELECT NOW();`; // Query Supabase database
    res.json({ message: "Connected to Supabase database!", result });
  } catch (err) {
    console.error("Database connection error:", err.message);
    res
      .status(500)
      .json({ error: "Failed to connect to database", details: err.message });
  }
});

// Start server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
