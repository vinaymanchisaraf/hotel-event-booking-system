# Hotel Conference Hall Booking & Event Scheduling System

A full-stack hotel conference hall reservation platform where customers can reserve conference halls and admins/coordinators can manage bookings, schedules, and analytics.

---

# 🚀 Live Demo

## Frontend Deployment
(Add your deployed frontend link here)

## Backend Deployment
(Add your deployed backend link here)

---

# 📌 Project Objective

The main objective of this project is to build a modern conference hall reservation and event scheduling system for hotels.

The system allows:

- Customers to search and reserve halls
- Coordinators to manage event statuses
- Admins to monitor analytics and bookings

---

# 🛠 Tech Stack

## Frontend
- ReactJS
- TailwindCSS
- React Router DOM
- Framer Motion
- React Icons
- Axios

## Backend
- Node.js
- Express.js

## Database
- SQLite

---

# ✨ Features

## Authentication
- User Registration
- User Login
- JWT Authentication
- Role-Based Access

## Customer Features
- Browse Conference Halls
- View Hall Details
- Book Event Halls
- Reservation Validation

## Admin Features
- Dashboard Analytics
- Manage Reservations
- Revenue Monitoring
- Booking Overview

## Coordinator Features
- Event Management
- Reservation Status Updates
- Ongoing Event Tracking

## Reservation System
- Prevent Overlapping Reservations
- Booking Validation
- Reservation Status Workflow

---

# 📂 Folder Structure

```bash
hotel-event-booking-system/
│
├── client/
│   ├── src/
│   │   ├── pages/
│   │   ├── components/
│   │   ├── layouts/
│   │   ├── services/
│   │   ├── context/
│   │   ├── hooks/
│   │   └── routes/
│
├── server/
│   ├── controllers/
│   ├── routes/
│   ├── middleware/
│   ├── models/
│   ├── database/
│   ├── utils/
│   └── config/
```

---

# ⚙️ Installation & Setup

## 1️⃣ Clone Repository

```bash
git clone <your-github-repository-link>
```

---

## 2️⃣ Navigate to Project

```bash
cd hotel-event-booking-system
```

---

# 🔥 Frontend Setup

## Navigate to Client Folder

```bash
cd client
```

## Install Dependencies

```bash
npm install
```

## Run Frontend

```bash
npm run dev
```

Frontend runs on:

```text
http://localhost:5173
```

---

# ⚡ Backend Setup

## Navigate to Server Folder

```bash
cd server
```

## Install Dependencies

```bash
npm install
```

## Run Backend

```bash
npm run dev
```

Backend runs on:

```text
http://localhost:5000
```

---

# 🔐 Environment Variables

Create `.env` file inside `server/`

```env
PORT=5000
JWT_SECRET=hotelbookingsecret
```

---

# 🗄 Database

Database used:

```text
SQLite
```

Database file:

```text
server/database/hotelBooking.db
```

---

# 📡 API Endpoints

---

## Authentication APIs

### Register User

```http
POST /api/auth/register
```

### Login User

```http
POST /api/auth/login
```

---

## Reservation APIs

### Create Reservation

```http
POST /api/reservations
```

### Get Reservations

```http
GET /api/reservations
```

### Update Reservation Status

```http
PUT /api/reservations/:id/status
```

---

## Dashboard APIs

### Dashboard Metrics

```http
GET /api/dashboard/events
```

---

# 🧠 Reservation Logic

The system prevents duplicate overlapping bookings using validation logic.

Example:

- Same hall
- Same date
- Overlapping time slots

➡️ Booking will be rejected automatically.

---

# 🔑 Demo Credentials

## Admin

```text
Email: admin@gmail.com
Password: admin123
```

---

## Coordinator

```text
Email: coordinator@gmail.com
Password: coordinator123
```

---

## Customer

```text
Email: customer@gmail.com
Password: customer123
```

---

# 📸 Screenshots

## Home Page
(Add screenshot here)

## Hall Listing Page
(Add screenshot here)

## Booking Page
(Add screenshot here)

## Admin Dashboard
(Add screenshot here)

## Coordinator Dashboard
(Add screenshot here)

---

# 🎥 Project Walkthrough Video

(Add your video recording link here)

---

# 🚀 Deployment

## Frontend Deployment
- Vercel
- Netlify

## Backend Deployment
- Render

---

# ✅ Project Requirements Completed

- Responsive UI
- Role-Based Authentication
- JWT Security
- SQLite Database
- Reservation Workflow
- Dashboard Analytics
- Booking Validation
- Overlapping Reservation Prevention
- Protected Routes
- Modern UI/UX

---

# 📈 Future Improvements

- Calendar Occupancy View
- Revenue Charts
- Pagination
- Email Notifications
- Payment Gateway Integration

---

# 👨‍💻 Author
Vinay Manchisaraf
