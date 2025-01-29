import postgres from "postgres";
import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config(); // Loads environment variables from .env file

// Creates a pool of connections to the database for efficiency

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: parseInt(process.env.DB_PORT, 10) || 3306,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0, // No limit on waiting requests
});

export default pool;
