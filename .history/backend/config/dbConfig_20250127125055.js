const mysql = require("mysql2"); // Use mysql2 for better performance and Promise support
require("dotenv").config(); // Load environment variables from .env file

// Create a MySQL connection using environment variables
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT || 3306, // Default to port 3306 if not specified
});

// Connect to the database and handle connection errors
db.connect((err) => {
  if (err) {
    console.error("Error connecting to database:", err.message);
  } else {
    console.log("Connected to MySQL database.");
  }
});

module.exports = db;
