# FoodHub 🍔

FoodHub is a full-stack food-sharing platform where users can discover food, like and save food posts, while food partners can register and upload food content.

## Features

- User registration and login
- Food Partner registration and login
- Food upload
- Food feed
- Like food posts
- Save food posts
- Saved food section
- Food Partner profile
- Secure authentication
- MongoDB database
- Image/file upload using storage service
- React-based frontend
- Node.js and Express backend

---

## Tech Stack

### Frontend
- React.js
- React Router
- Axios
- Vite
- CSS

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- Multer
- Storage Service

---

## Project Structure

```text
Foodhub/
│
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── db/
│   │   ├── middlewares/
│   │   ├── models/
│   │   ├── routes/
│   │   └── services/
│   ├── server.js
│   ├── package.json
│   └── package-lock.json
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── routes/
│   │   ├── styles/
│   │   └── assets/
│   ├── package.json
│   └── package-lock.json
│
├── videos/
│
├── .gitignore
└── README.md
```

---

# Getting Started

## 1. Clone the Repository

```bash
git clone https://github.com/Nanc199/Foodhub.git
cd Foodhub
```

---

## 2. Setup the Backend

Open the backend folder:

```bash
cd backend
```

Install the dependencies:

```bash
npm install
```

### Create Environment Variables

Create a `.env` file inside the `backend` folder.

Example:

```env
PORT=3000
MONGO_URI=mongodb://localhost:27017/foodhub
FRONTEND_URL=http://localhost:5173
```

> Add your actual MongoDB connection string and other required credentials to the `.env` file.

### Start the Backend

```bash
npm start
```

The backend will run on:

```text
http://localhost:3000
```

---

# 3. Setup the Frontend

Open a new terminal and go to the frontend folder:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The frontend will run on:

```text
http://localhost:5173
```

---

# API Overview

## Authentication

### User

```text
POST /api/auth/user/register
POST /api/auth/user/login
GET  /api/auth/user/logout
```

### Food Partner

```text
POST /api/auth/food-partner/register
POST /api/auth/food-partner/login
GET  /api/auth/food-partner/logout
```

---

## Food

```text
POST /api/food/
GET  /api/food/
POST /api/food/like
POST /api/food/save
GET  /api/food/save
```

---

## Food Partner

```text
GET /api/food-partner/:id
```

---

# Frontend Routes

The application uses React Router.

```text
/register
/user/register
/user/login
/food-partner/register
/food-partner/login
/
/saved
/create-food
/food-partner/:id
```

---

# Database

FoodHub uses **MongoDB** for storing application data.

The backend uses Mongoose for database interaction and provides models for:

- Users
- Food Partners
- Food
- Likes
- Saved Food

---

# File Upload

Food uploads are handled using multipart form data.

The backend processes uploaded files through the storage service before storing the required file information.

---

# CORS

The backend is configured to allow communication with the React frontend through CORS.

Frontend:

```text
http://localhost:5173
```

Backend:

```text
http://localhost:3000
```

---

# Running the Project

You need to run both frontend and backend servers.

### Backend

```bash
cd backend
npm install
npm start
```

### Frontend

Open another terminal:

```bash
cd frontend
npm install
npm run dev
```

Then open:

```text
http://localhost:5173
```

---

# Contributing

Contributions are welcome.

If you want to contribute:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Commit your changes
5. Push the branch
6. Open a Pull Request

---

# License

This project currently does not include a separate license file.

---

## Author

**Nancy**

GitHub: https://github.com/Nanc199
