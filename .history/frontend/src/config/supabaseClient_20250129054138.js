import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://xkmnkoqhqebvoygpxgas.supabase.co"; // Your Supabase project URL
const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhrbW5rb3FocWVidm95Z3B4Z2FzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzgxMzY1OTIsImV4cCI6MjA1MzcxMjU5Mn0.1GHdM0Gb58rqNXwE9HmoqykgPviMiAIDUnH3oi_4jZM";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
