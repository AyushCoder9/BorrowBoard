# BorrowBoard API

BorrowBoard is a backend API for a resource-sharing application, built with Node.js, Express, TypeScript, and MongoDB. It allows users to manage resources (books, electronics, tools, etc.) with full CRUD capabilities.

## 🚀 Features

- **Resource Management**: Create, Read, Update, and Delete resources.
- **Advanced Querying**: Search, filter, sort, and pagination.
- **Authentication Middleware**: Simple header-based authentication (`user-id`).
- **Data Validation**: Mongoose schemas ensure data integrity.
- **Typed Codebase**: Fully written in TypeScript for reliability.

## 🛠️ Tech Stack

- **Runtime**: Node.js
- **Language**: TypeScript
- **Framework**: Express.js
- **Database**: MongoDB (via Mongoose)
- **Security**: Helmet, CORS
- **Dev Tools**: tsx (for hot reloading)

## 📋 Prerequisites

- [Node.js](https://nodejs.org/) (v16+ recommended)
- A MongoDB Connection URI (Local or Atlas)

## ⚙️ Installation

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/AyushCoder9/BorrowBoard.git
    cd BorrowBoard
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

3.  **Configure Environment:**
    Create a `.env` file in the root directory:
    ```env
    MONGO_URI=your_mongodb_connection_string
    PORT=3000
    ```

## 🏃‍♂️ Running the Application

**Development Mode:**
Start the server with hot-reload enabled:

```bash
npm run dev
```

The server will start at `http://localhost:3000`.

## 🔌 API Endpoints

Base URL: `/api/resources`

### Resources

| Method   | Endpoint | Description                               | Auth Required          |
| :------- | :------- | :---------------------------------------- | :--------------------- |
| `GET`    | `/`      | Get all resources (supports query params) | No                     |
| `GET`    | `/:id`   | Get a specific resource by ID             | No                     |
| `POST`   | `/`      | Create a new resource                     | Yes (`user-id` header) |
| `PUT`    | `/:id`   | Update a resource                         | Yes (`user-id` header) |
| `DELETE` | `/:id`   | Delete a resource                         | Yes (`user-id` header) |

### Query Parameters (GET /)

- `search`: Search by title (e.g., `?search=book`)
- `category`: Filter by category (e.g., `?category=Electronics`)
- `sortBy`: Sort field (e.g., `?sortBy=price`)
- `order`: Sort order (`asc` or `desc`)
- `page`: Page number (default: 1)
- `limit`: Items per page (default: 5)

## 🔒 Authentication

Protected routes require a `user-id` header:

```bash
user-id: your-user-id
```

## 📂 Project Structure

```
src/
├── controllers/   # Request handlers
├── models/        # Mongoose schemas
├── repositories/  # Database access layer
├── routes/        # API route definitions
├── services/      # Business logic
├── utils/         # Helpers & middleware
├── app.ts         # Express app setup
└── server.ts      # Entry point
```
