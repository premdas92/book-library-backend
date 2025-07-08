# 📚 Book Library Backend

This folder contains the **backend API** for the Book Library application. It provides RESTful endpoints to create, read, update, delete, and search books. The backend uses **Node.js**, **Express**, and **MongoDB (Mongoose)**.

---

## ⚙️ Getting started

1. **Install dependencies**  
   ```bash
   npm install
   ```

2. **Set up your MongoDB URI in a .env file at the root:**
    MONGO_URI=mongodb+srv://<username>:<password>@<cluster-url>/<dbname>

3. **Start the server**
    ```bash
    npm start
    ```
    The server starts on port http://localhost:7777

4. **Swagger doc**
   Visit the swagger docs on http://localhost:7777/api-docs/ to test the APIs

## 📌 API endpoints
    
| Method | Endpoint                   | Description                                      |
| ------ | -------------------------- | ------------------------------------------------ |
| POST   | `/api/book`                | Create a new book                                |
| GET    | `/api/book`                | Fetch all books                                  |
| GET    | `/api/book/search?q=xxx`   | Search books by title or author                  |
| GET    | `/api/book/status/:status` | Fetch books filtered by status (`read`/`unread`) |
| GET    | `/api/book/:id`            | Fetch a book by its ID                           |
| PATCH  | `/api/book/:id`            | Update a book by its ID                          |
| DELETE | `/api/book/:id`            | Delete a book by its ID                          |

## 🔎 Example requests

Create a book
```http
POST /api/book
Content-Type: application/json

{
  "title": "Don Quixote",
  "author": "Miguel de Cervantes",
  "status": "read",
  "description": "A classic Spanish novel about chivalry."
}
```
Search books
```
 GET /api/book/search?q=quixote
```

## 🛠️ Tech stack
Backend: Node.js, Express.js

Database: MongoDB (Mongoose)
