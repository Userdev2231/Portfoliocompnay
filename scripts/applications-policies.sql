-- Enable Row Level Security on applications table
ALTER TABLE applications ENABLE ROW LEVEL SECURITY;

-- Policy to allow anyone to insert applications (for public form submissions)
CREATE POLICY "Allow public insert" ON applications
  FOR INSERT 
  WITH CHECK (true);

-- Policy to allow anyone to select applications (adjust as needed for admin access)
CREATE POLICY "Allow public select" ON applications
  FOR SELECT 
  USING (true);

-- Policy to allow authenticated users to update applications (for admin panel)
CREATE POLICY "Allow authenticated update" ON applications
  FOR UPDATE 
  USING (auth.role() = 'authenticated')
  WITH CHECK (auth.role() = 'authenticated');

-- Policy to allow authenticated users to delete applications (for admin panel)
CREATE POLICY "Allow authenticated delete" ON applications
  FOR DELETE 
  USING (auth.role() = 'authenticated');
