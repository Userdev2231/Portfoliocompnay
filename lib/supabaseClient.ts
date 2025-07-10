import { createClient } from '@supabase/supabase-js'

// ✅ Use environment variables for security
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

// ✅ Initialize the Supabase client with your URL + anon key
export const supabase = createClient(supabaseUrl, supabaseAnonKey)
