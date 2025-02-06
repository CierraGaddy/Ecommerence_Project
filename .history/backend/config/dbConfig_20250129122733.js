//Database connection to Supabase
import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables

// Ensure DATABASE_URL is correctly set in .env
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;

// Create Supabase client
export const supabase = createClient(supabaseUrl, supabaseKey);
