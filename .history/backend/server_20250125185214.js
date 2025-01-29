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

// Fetch all products
app.get("/products", (req, res) => {
  console.log("Fetching products..."); // Add log to see if the route is being accessed
  const query = "SELECT * FROM products";
  pool.query(query, (err, results) => {
    if (err) {
      console.error("Error fetching products:", err.message);
      return res.status(500).json({ error: "Server error" });
    }
    res.json(results);
  });
});

// Start server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
