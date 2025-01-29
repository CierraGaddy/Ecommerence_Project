import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import supabase from "./config/dbConfig.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Test database connection
app.get("/test-db", async (req, res) => {
  try {
    let { data, error } = await supabase.from("products").select("*");

    if (error) throw error;

    res.json({ message: "Connected to Supabase!", products: data });
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
