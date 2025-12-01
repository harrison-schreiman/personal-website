/*
  # Create contact submissions table

  1. New Tables
    - `contact_submissions`
      - `id` (uuid, primary key) - Unique identifier for each submission
      - `name` (text) - Name of the person contacting
      - `email` (text) - Email address of the person contacting
      - `subject` (text) - Subject line of the message
      - `message` (text) - The message content
      - `created_at` (timestamptz) - Timestamp when the submission was created
      - `read` (boolean) - Whether the message has been read by the site owner

  2. Security
    - Enable Row Level Security (RLS) on `contact_submissions` table
    - Add policy to allow anyone to insert contact submissions (public form)
    - Only authenticated site owner can read submissions (for future admin panel)
*/

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  subject text NOT NULL,
  message text NOT NULL,
  read boolean DEFAULT false,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit contact form"
  ON contact_submissions
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view submissions"
  ON contact_submissions
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can update read status"
  ON contact_submissions
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);
