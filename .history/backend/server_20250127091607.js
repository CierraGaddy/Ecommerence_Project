const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
require("dotenv").config(); // Load environment variables

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Create MySQL database connection pool
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: parseInt(process.env.DB_PORT, 10), // Ensure port is parsed as a number
});

// Use the promise-based API of mysql2
const promisePool = pool.promise(); // This provides a promise-based API

// Test database connection
pool.getConnection((err, connection) => {
  if (err) {
    console.error("Error connecting to the database:", err.message);
  } else {
    console.log("Connected to the MySQL database!");
    connection.release(); // Release the connection back to the pool
  }
});

// Routes
// Root route (handles the home page)
app.get("/", (req, res) => {
  res.send("Welcome to the Home Page");
});

// Fetch all products using async/await and promise-based API
app.get("/products", async (req, res) => {
  try {
    const [rows] = await promisePool.query("SELECT * FROM products");
    res.json(rows); // Return the products as JSON
  } catch (err) {
    console.error("Error fetching products:", err.message);
    res.status(500).json({ error: "Server error" });
  }
});

// Start server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
