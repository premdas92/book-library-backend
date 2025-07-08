const express = require("express");
const {
  createBook,
  fetchAllBooks,
  fetchBookById,
  deleteBookById,
  updateBook,
  fetchBooksByStatus,
  searchBook,
} = require("../controllers/bookController");

const bookRouter = express.Router();

/**
 * @swagger
 * /api/book:
 *   post:
 *     summary: Create a new book
 *     tags:
 *       - Books
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/BookInput'
 *     responses:
 *       201:
 *         description: Book created successfully
 */
bookRouter.post("/", createBook);

/**
 * @swagger
 * /api/book:
 *   get:
 *     summary: Get all books
 *     tags:
 *       - Books
 *     responses:
 *       200:
 *         description: A list of books
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Book'
 */
bookRouter.get("/", fetchAllBooks);

/**
 * @swagger
 * /api/book/search:
 *   get:
 *     summary: Search books by title or author
 *     tags:
 *       - Books
 *     parameters:
 *       - in: query
 *         name: q
 *         schema:
 *           type: string
 *         required: true
 *         description: The search keyword
 *     responses:
 *       200:
 *         description: Books matching the query
 */
bookRouter.get("/search", searchBook);

/**
 * @swagger
 * /api/book/{id}:
 *   get:
 *     summary: Get a book by ID
 *     tags:
 *       - Books
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Book ID
 *     responses:
 *       200:
 *         description: Book details
 */
bookRouter.get("/:id", fetchBookById);

/**
 * @swagger
 * /api/book/{id}:
 *   delete:
 *     summary: Delete a book by ID
 *     tags:
 *       - Books
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Book ID
 *     responses:
 *       200:
 *         description: Book deleted successfully
 */
bookRouter.delete("/:id", deleteBookById);

/**
 * @swagger
 * /api/book/{id}:
 *   patch:
 *     summary: Update a book by ID
 *     tags:
 *       - Books
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Book ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/BookInput'
 *     responses:
 *       200:
 *         description: Book updated successfully
 */
bookRouter.patch("/:id", updateBook);

/**
 * @swagger
 * /api/book/status/{status}:
 *   get:
 *     summary: Get books by status
 *     tags:
 *       - Books
 *     parameters:
 *       - in: path
 *         name: status
 *         schema:
 *           type: string
 *           enum: [read, unread]
 *         required: true
 *         description: Filter books by status
 *     responses:
 *       200:
 *         description: Filtered book list
 */
bookRouter.get("/status/:status", fetchBooksByStatus);

module.exports = bookRouter;
