import postgres from "postgres";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables from .env file

// Create a connection to the Supabase PostgreSQL database
const connectionString = process.env.DATABASE_URL;
const sql = postgres(connectionString, { ssl: "require" });

export default sql; // Export the database connection
