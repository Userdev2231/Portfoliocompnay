-- Enable RLS & allow anonymous INSERT + SELECT (adjust roles as needed)
ALTER TABLE applications ENABLE ROW LEVEL SECURITY;

-- anyone can INSERT
CREATE POLICY "Public insert" ON applications
  FOR INSERT WITH CHECK (true);

-- anyone can SELECT their own row (or open up as needed)
CREATE POLICY "Public select" ON applications
  FOR SELECT USING (true);
