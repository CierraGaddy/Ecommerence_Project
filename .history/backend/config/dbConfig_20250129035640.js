import postgres from "postgres";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables

// Connect to the Supabase database using transaction pooling
const sql = postgres(process.env.DATABASE_URL, {
  ssl: "require", // Ensure SSL is required for secure connection
});

export default sql;
