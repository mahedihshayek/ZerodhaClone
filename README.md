# 🚀 Zerodha Clone

A full-stack stock trading platform inspired by Zerodha, built using the MERN stack. This project recreates the core workflow of a modern trading application with a public landing website, authentication system, user dashboard, portfolio management, holdings, positions, and order handling.

> **Disclaimer:** This project is created for educational and portfolio purposes only. It is not affiliated with or endorsed by Zerodha.

---

# 🌐 Live Demo

🔗 **Live Application:**  
https://zerodha-clone-omega-liard.vercel.app/

---

# 📌 Project Overview

This repository contains three independent applications working together:

- **Frontend** — Public landing website with authentication pages
- **Dashboard** — User trading dashboard for managing portfolio data
- **Backend** — REST API server responsible for authentication, database operations, holdings, positions, and orders

The application follows a full-stack architecture:

```
React Frontend
      |
      |
      ↓
Express.js REST API
      |
      |
      ↓
MongoDB Atlas Database
```

---

# 🛠️ Tech Stack

## Frontend

- React.js
- React Router
- Bootstrap
- HTML5
- CSS3
- JavaScript (ES6)
- Axios

---

## Dashboard

- React.js
- React Router
- Material UI (MUI)
- Axios
- Chart.js

---

## Backend

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JSON Web Token (JWT)
- bcrypt
- Cookie Parser
- CORS
- REST API Architecture

---

## Database

- MongoDB Atlas

---

## Deployment

- Frontend: Vercel
- Dashboard: Vercel
- Backend API: Render
- Database: MongoDB Atlas

---

# 📂 Project Structure

```
ZerodhaClone/
│
├── frontend/          # Landing website and authentication pages
│
├── dashboard/         # Trading dashboard application
│
├── backend/           # Express API and database logic
│
└── README.md
```

---

# ✨ Features

## 🔐 Authentication

- User signup
- User login
- Password encryption using bcrypt
- JWT-based authentication
- Token handling
- Protected dashboard access
- Secure API communication

---

# 🌍 Frontend Features

- Zerodha-inspired landing page
- Home page
- Products section
- Pricing section
- About section
- Support section
- Signup page
- Login page
- React component-based architecture

---

# 📊 Dashboard Features

- User profile section
- Portfolio overview
- Holdings management
- Orders section
- Interactive charts
- Separate dashboard application
- Connected with backend APIs

---

# ⚙️ Backend Features

- RESTful API development
- User authentication APIs
- User data management
- Holdings API
- Positions API
- Order creation API
- MongoDB database integration
- Middleware handling
- CORS configuration
- Secure authentication flow

---

# 🔌 API Endpoints

## Authentication

### Signup

```
POST /signup
```

### Login

```
POST /login
```

---

## Dashboard

### Get Holdings

```
GET /allHoldings
```

### Get Positions

```
GET /allPositions
```

### Create Order

```
POST /newOrder
```

---

# 🚀 Installation & Setup

## Clone Repository

```bash
git clone https://github.com/mahedihshayek/ZerodhaClone.git

cd ZerodhaClone
```

---

# 📦 Install Dependencies

## Frontend

```bash
cd frontend
npm install
```

---

## Dashboard

```bash
cd dashboard
npm install
```

---

## Backend

```bash
cd backend
npm install
```

---

# ▶️ Run Locally

## Start Backend

```bash
cd backend
node index.js
```

Backend will run on:

```
http://localhost:3002
```

---

## Start Frontend

```bash
cd frontend
npm start
```

Frontend will run on:

```
http://localhost:3000
```

---

## Start Dashboard

```bash
cd dashboard
npm start
```

Dashboard will run on:

```
http://localhost:3001
```

---

# 🔑 Environment Variables

Create a `.env` file inside the backend folder:

```
PORT=3002

MONGO_URL=your_mongodb_connection_string

JWT_SECRET=your_secret_key
```

---

# 📚 Learning Objectives

This project helped me gain practical experience with:

- Building complete MERN stack applications
- Creating RESTful APIs using Express.js
- Designing reusable React components
- Connecting frontend applications with backend services
- Implementing JWT authentication
- Password hashing and security practices
- Working with MongoDB Atlas
- Managing multiple React applications
- Handling CORS and deployment configuration
- Deploying full-stack applications using cloud platforms
- Using Git and GitHub workflow

---

# 🔮 Future Improvements

- Real-time stock market data integration
- Live stock price updates
- Advanced trading charts
- Transaction history
- Better mobile optimization
- Docker containerization
- CI/CD pipeline
- Improved analytics system


---

# 📄 License

This project is created for educational and portfolio purposes only.

---

# 👨‍💻 Author

## Mahedi Shayek

GitHub:  
https://github.com/mahedihshayek

LinkedIn:  
https://www.linkedin.com/in/mahedihshayek/
