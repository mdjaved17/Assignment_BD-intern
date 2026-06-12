# Backend Assignment

## Tech Stack

* Node.js
* Express.js
* MongoDB Atlas
* JWT Authentication
* bcryptjs


## Project Structure

```text
backend/
├── controllers
├── middleware
├── models
├── routes
├── server.js

frontend/
├── src
│   ├── pages
│   ├── App.jsx
│   └── main.jsx
```


## Features

* User Registration & Login
* Password Hashing using bcryptjs
* JWT Authentication
* Role-Based Access Control (Admin/User)
* Protected Routes
* Task CRUD APIs
* API Versioning

## API Endpoints

### Authentication APIs

* POST `/api/v1/auth/register`
* POST `/api/v1/auth/login`

### Task APIs

* POST `/api/v1/tasks`
* GET `/api/v1/tasks`
* PUT `/api/v1/tasks/:id`
* DELETE `/api/v1/tasks/:id`

## Installation & Setup

### Clone Repository

```bash
git clone https://github.com/mdjaved17/Assignment_BD-intern
cd backend
```

### Install Dependencies

```bash
npm install
```

### Create .env File

```env
PORT=8000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret_key
```

### Run Server

```bash
npm run dev
```

## Authentication

Protected routes require JWT token in headers:

```text
Authorization: Bearer YOUR_TOKEN
```

## Postman Collection

Import the provided Postman collection to test APIs.

## Scalability Notes

* Redis can be used for caching.
* Docker can be used for containerization.
* Nginx can be used for load balancing.
* The application can be migrated to microservices architecture in future.


## Frontend Features

* User Registration
* User Login
* Dashboard
* Create Task
* View Tasks
* Admin Role Display
* Logout Functionality
* Admin-only Delete Task

## Authentication

JWT authentication is implemented. Users receive a token after login, which is used to access protected routes.

## Role-Based Access Control

* User: Can create and view tasks.
* Admin: Can create, view, and delete tasks.

## Demo Credentials

### Admin Account

* Email: [admin@gmail.com](mailto:admin@gmail.com)
* Password: 123456

### User Account

* Email: [user@gmail.com](mailto:user@gmail.com)
* Password: 123456


## Future Improvements

* Redis caching
* Docker deployment
* Microservices architecture
* Load balancing using Nginx




## Author

Md Javed Alam
