-- Shabbat Sparks - Supabase Database Setup
-- Run this in your Supabase SQL Editor: https://supabase.com/dashboard/project/_/sql

-- 1. Create email_subscribers table
CREATE TABLE IF NOT EXISTS email_subscribers (
  id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,
  email text UNIQUE NOT NULL,
  name text,
  phone text,
  created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 2. Enable Row Level Security
ALTER TABLE email_subscribers ENABLE ROW LEVEL SECURITY;

-- 3. Create policy to allow PUBLIC inserts (important!)
DROP POLICY IF EXISTS "Allow public email signups" ON email_subscribers;
CREATE POLICY "Allow public email signups"
  ON email_subscribers
  FOR INSERT
  WITH CHECK (true);

-- 4. Optional: Create policy to allow users to read their own data
DROP POLICY IF EXISTS "Users can view all subscribers" ON email_subscribers;
CREATE POLICY "Users can view all subscribers"
  ON email_subscribers
  FOR SELECT
  USING (true);

-- 5. Optional: Create donations tracking table
CREATE TABLE IF NOT EXISTS donations (
  id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,
  amount decimal(10,2) NOT NULL,
  email text,
  stripe_session_id text UNIQUE,
  metadata jsonb,
  created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL
);

ALTER TABLE donations ENABLE ROW LEVEL SECURITY;

-- Allow inserts from authenticated users only (API will use service role)
DROP POLICY IF EXISTS "Service role can insert donations" ON donations;
CREATE POLICY "Service role can insert donations"
  ON donations
  FOR INSERT
  WITH CHECK (true);

-- Allow anyone to view donations (for stats)
DROP POLICY IF EXISTS "Anyone can view donations" ON donations;
CREATE POLICY "Anyone can view donations"
  ON donations
  FOR SELECT
  USING (true);

-- Verify tables were created
SELECT table_name 
FROM information_schema.tables 
WHERE table_schema = 'public' 
AND table_name IN ('email_subscribers', 'donations');
