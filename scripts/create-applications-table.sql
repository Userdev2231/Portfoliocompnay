-- Create applications table for The Ad-Project
CREATE TABLE IF NOT EXISTS applications (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  location TEXT NOT NULL,
  contribution TEXT NOT NULL,
  availability TEXT NOT NULL,
  skills TEXT NOT NULL,
  expertise TEXT NOT NULL,
  status TEXT DEFAULT 'pending',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create an index on email for faster lookups
CREATE INDEX IF NOT EXISTS idx_applications_email ON applications(email);

-- Create an index on status for filtering
CREATE INDEX IF NOT EXISTS idx_applications_status ON applications(status);

-- Create an index on created_at for sorting
CREATE INDEX IF NOT EXISTS idx_applications_created_at ON applications(created_at DESC);
