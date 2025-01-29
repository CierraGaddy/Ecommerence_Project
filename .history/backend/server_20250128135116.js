const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const path = require("path"); // For serving frontend files
require("dotenv").config(); // Load environment variables

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(
  cors({
    origin: ["http://localhost:5173", "http://localhost:5174"], // Allow multiple frontend origins
    methods: ["GET", "POST", "PUT", "DELETE"], // Define allowed HTTP methods
    allowedHeaders: ["Content-Type"], // Define allowed headers
  })
);
app.use(express.json()); // Parse JSON in requests
app.use(express.static(path.join(__dirname, "../frontend/dist"))); // Serve React app

// Create MySQL database connection pool
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: parseInt(process.env.DB_PORT, 10), // Ensure port is parsed as a number
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
app.get("/api/products", async (req, res) => {
  try {
    const [rows] = await promisePool.query("SELECT * FROM products");
    res.json(rows); // Return the products as JSON
  } catch (err) {
    console.error("Error fetching products:", err.message);
    res.status(500).json({ error: "Server error" });
  }
});

// Fallback route to serve React app
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
});

app.use((err, req, res, next) => {
  console.error("Unhandled error:", err.message);
  res.status(500).json({ error: "Something went wrong, please try again." });
});

// Start server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
