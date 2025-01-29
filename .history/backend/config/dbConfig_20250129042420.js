import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables

// Get Supabase URL and Key from .env
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_ANON_KEY;

//  Initialize Supabase client
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase; // Export Supabase instance
