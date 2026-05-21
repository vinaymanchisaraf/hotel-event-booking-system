CREATE TABLE IF NOT EXISTS users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  email TEXT UNIQUE NOT NULL,
  password TEXT NOT NULL,
  role TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS conference_halls (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  hall_name TEXT,
  seating_capacity INTEGER,
  facilities TEXT,
  pricing INTEGER,
  availability_status TEXT
);

CREATE TABLE IF NOT EXISTS reservations (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  customer_id INTEGER,
  hall_id INTEGER,
  event_type TEXT,
  guest_count INTEGER,
  event_date TEXT,
  start_time TEXT,
  end_time TEXT,
  reservation_status TEXT
);