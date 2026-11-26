# LeadMangement-
**GitHub Repository Description:**  `A full-stack Lead Management CRM application built using React.js, Node.js, Express.js, and MongoDB with JWT authentication, lead tracking, CRUD operations, search, and filtering.`

# LeadFlow CRM – Lead Management System

## About the Project

LeadFlow CRM is a full-stack Lead Management System designed to manage and track leads efficiently. It provides a user-friendly dashboard where users can add, update, delete, search, and manage leads.

The application uses React.js for the frontend, Node.js and Express.js for the backend, and MongoDB for database management.

## Live Demo

**Live Application:**  
https://leadmangementfrontend-nzxnk45u6-task-flow-44e7.vercel.app/

**Backend:**  
https://leadmangement-backend-wzx9.onrender.com

## GitHub Repository

https://github.com/shravanidahule-debug/LeadMangement-

## Features

- User Registration and Login
- JWT-based Authentication
- Secure Password Hashing using bcrypt
- Dashboard with Lead Statistics
- Add New Leads
- Edit and Update Leads
- Delete Leads
- Search Leads
- Filter Leads by Status
- MongoDB Database Integration
- Responsive User Interface

## Technologies Used

### Frontend
- React.js
- JavaScript
- HTML5
- CSS3
- Bootstrap
- Axios
- Vite

### Backend
- Node.js
- Express.js
- REST API
- JWT Authentication
- bcryptjs

### Database
- MongoDB Atlas
- Mongoose

### Deployment
- Frontend: Vercel
- Backend: Render
- Source Code: GitHub

## Installation and Setup

### 1. Clone the Repository

```bash
git clone https://github.com/shravanidahule-debug/LeadMangement-.git
```

### 2. Navigate to the Project Folder

```bash
cd LeadMangement-
```

### 3. Setup Backend

```bash
cd server
npm install
```

Create a `.env` file inside the server folder and add:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

Start the backend:

```bash
npm start
```

### 4. Setup Frontend

Open another terminal:

```bash
cd "lead mangement"
npm install
```

Create a `.env` file inside the frontend folder:

```env
VITE_API_URL=http://localhost:5000/api
```

Start the frontend:

```bash
npm run dev
```

The application will run locally using the frontend and backend servers.

## Application Architecture

The project follows a client-server architecture.

1. **Frontend:** React.js provides the user interface and handles user interactions.
2. **Backend:** Node.js and Express.js handle API requests, authentication, and business logic.
3. **Database:** MongoDB stores user and lead information.
4. **Authentication:** JWT is used for user authentication, while bcryptjs hashes passwords.
5. **Communication:** Axios connects the frontend with backend REST APIs.

## Future Enhancements

- Lead assignment to team members
- Email notifications
- Advanced reporting and analytics
- Role-based access control

## Author

**Shravani Dahule**

GitHub: https://github.com/shravanidahule-debug
