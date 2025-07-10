import { createClient, type PostgrestError } from "@supabase/supabase-js"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export interface ApplicationData {
  id?: string
  name: string
  email: string
  phone: string
  location: string
  contribution: string
  availability: string
  skills: string
  expertise: string
  status?: string
  created_at?: string
  updated_at?: string
}

export function logSupabaseError(err: PostgrestError | null) {
  if (err) {
    console.error("Supabase error details:", {
      message: err.message,
      details: err.details,
      hint: err.hint,
      code: err.code,
    })
  }
}
