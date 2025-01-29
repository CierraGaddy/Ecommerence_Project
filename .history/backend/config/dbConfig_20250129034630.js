import postgres from "postgres";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables

// Connect to Supabase using the transaction pooler
const sql = postgres(process.env.DATABASE_URL, {
  ssl: "require", // Supabase requires SSL for secure connections
  prepare: false, // Disable prepared statements since pooler does not support them
});

export default sql;
