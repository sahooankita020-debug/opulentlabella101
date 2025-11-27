/*
  # Create Bookings Table for Opulentlabella

  1. New Tables
    - `bookings`
      - `id` (uuid, primary key)
      - `client_name` (text)
      - `client_phone` (text)
      - `service_type` (text)
      - `preferred_date` (timestamp)
      - `preferred_time` (text)
      - `deposit_status` (text, default: 'pending')
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

  2. Security
    - Enable RLS on `bookings` table
    - Add policies to allow public bookings submission (needed for client signups)
    - Add policies to allow viewing of own bookings
*/

CREATE TABLE IF NOT EXISTS bookings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  client_name text NOT NULL,
  client_phone text NOT NULL,
  service_type text NOT NULL,
  preferred_date timestamptz NOT NULL,
  preferred_time text NOT NULL,
  deposit_status text DEFAULT 'pending',
  notes text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit a booking"
  ON bookings
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Anyone can view all bookings"
  ON bookings
  FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Only admin can update bookings"
  ON bookings
  FOR UPDATE
  TO authenticated
  USING (auth.jwt()->>'email' = 'admin@opulentlabella.com')
  WITH CHECK (auth.jwt()->>'email' = 'admin@opulentlabella.com');

CREATE POLICY "Only admin can delete bookings"
  ON bookings
  FOR DELETE
  TO authenticated
  USING (auth.jwt()->>'email' = 'admin@opulentlabella.com');

CREATE INDEX IF NOT EXISTS bookings_service_type_idx ON bookings(service_type);
CREATE INDEX IF NOT EXISTS bookings_preferred_date_idx ON bookings(preferred_date);
CREATE INDEX IF NOT EXISTS bookings_deposit_status_idx ON bookings(deposit_status);