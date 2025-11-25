import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Database Types
export type EmailSubscriber = {
  id: string;
  email: string;
  name?: string;
  phone?: string;
  created_at: string;
};

export type UserStreak = {
  id: string;
  user_id: string;
  current_streak: number;
  total_weeks: number;
  last_participation: string;
  total_donated: number;
  created_at: string;
  updated_at: string;
};
