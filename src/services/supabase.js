import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://hphmnieohtsvdturrmxh.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhwaG1uaWVvaHRzdmR0dXJybXhoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjE4OTY0ODMsImV4cCI6MjAzNzQ3MjQ4M30.LDz-daRuY_VngAM00MsJ8Ea0IJ25eOi50dQ_qW8wsVY";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
  