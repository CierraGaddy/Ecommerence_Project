import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY; // Make sure this exists!

// ✅ Create Supabase client with API key
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
