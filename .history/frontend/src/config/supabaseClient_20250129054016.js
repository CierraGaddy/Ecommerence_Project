import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://xkmnkoqhqebvoygpxgas.supabase.co"; // Your Supabase project URL
const SUPABASE_ANON_KEY = "your-anon-key-here"; // Replace with your actual key

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
