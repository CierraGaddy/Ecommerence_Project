import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";
import mysql from "mysql2"; // Ensure mysql2 is imported
import productRoutes from "./routes/productRoutes.js";

dotenv.config(); // Load environment variables

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(
  cors({
    origin: ["http://localhost:5173", "http://localhost:5174"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type"],
  })
);
app.use(express.json());

// Create __dirname for ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve React app
app.use(express.static(path.join(__dirname, "../frontend/dist")));

// Create MySQL database connection pool
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: parseInt(process.env.DB_PORT, 10), // Ensure port is parsed as a number
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

// Use the promise-based API of mysql2
const promisePool = pool.promise();

// Test database connection
pool.getConnection((err, connection) => {
  if (err) {
    console.error("Error connecting to the database:", err.message);
  } else {
    console.log("Connected to the MySQL database!");
    connection.release(); // Release the connection back to the pool
  }
});

// API Routes
app.use("/api/products", productRoutes);

// Get all products
app.get("/api/products", async (req, res) => {
  try {
    const [rows] = await promisePool.query("SELECT * FROM products");
    res.json(rows); // Return the products as JSON
  } catch (err) {
    console.error("Error fetching products:", err.message);
    res.status(500).json({ error: "Failed to fetch products" });
  }
});

// Filter products by category, minPrice, and maxPrice
app.get("/api/products/filter", async (req, res) => {
  const { category, minPrice, maxPrice } = req.query;

  // Validate query parameters
  if (minPrice && isNaN(minPrice)) {
    return res.status(400).json({ error: "Invalid minPrice value" });
  }
  if (maxPrice && isNaN(maxPrice)) {
    return res.status(400).json({ error: "Invalid maxPrice value" });
  }

  let query = "SELECT * FROM products WHERE 1=1";
  const params = [];

  // Add conditions dynamically
  if (category && category.trim() !== "") {
    query += " AND category = ?";
    params.push(category.trim());
  }
  if (minPrice) {
    query += " AND price >= ?";
    params.push(parseFloat(minPrice));
  }
  if (maxPrice) {
    query += " AND price <= ?";
    params.push(parseFloat(maxPrice));
  }

  console.log("Executing query:", query, params); // Debugging

  try {
    const [filteredProducts] = await promisePool.query(query, params);
    res.json(filteredProducts); // Return filtered products
  } catch (err) {
    console.error("Error executing query:", err.message);
    res.status(500).json({ error: "Failed to filter products" });
  }
});

// Fallback route to serve React app
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
});

// Global error handler
app.use((err, req, res, next) => {
  console.error("Unhandled error:", err.message);
  res.status(500).json({ error: "Something went wrong, please try again." });
});

// Start server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
