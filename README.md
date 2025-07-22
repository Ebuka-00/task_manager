# 📝 Task Manager API

A simple RESTful API for managing tasks using Node.js and Express. This project demonstrates basic CRUD (Create, Read, Update, Delete) operations with in-memory data storage.

---

## 📁 Folder Structure

task-manager/
│
├── src/
│ ├── controllers/ # Business logic (task functions)
│ ├── models/ # Task data (in-memory array)
│ ├── routes/ # Task API routes
│ └── app.js # Express app setup
│
├── server.js # Application entry point
├── package.json
└── README.md # Project documentation

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/task-manager.git
cd task-manager

## ▶️ Run the Server

Make sure you're in the root folder of your project, then:

### 🛠️ Development Mode (with auto-reload)

```bash
npm run dev'



## 📡 API Endpoints

All task routes are prefixed with `/api/tasks`.

| Method | Endpoint           | Description            |
|--------|--------------------|------------------------|
| GET    | `/api/tasks`       | Get all tasks          |
| GET    | `/api/tasks/:id`   | Get a task by ID       |
| POST   | `/api/tasks`       | Create a new task      |
| PUT    | `/api/tasks/:id`   | Update a task by ID    |
| DELETE | `/api/tasks/:id`   | Delete a task by ID    |

---

### 🔄 Example Request Bodies

#### ➕ Create Task (POST)

```json
{
  "title": "Learn Express"
}



