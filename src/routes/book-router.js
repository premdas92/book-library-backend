const express = require("express");
const {
  createBook,
  fetchAllBooks,
  fetchBookById,
  deleteBookById,
  updateBook,
  fetchBooksByStatus,
  searchBook
} = require("../controllers/bookController");

const bookRouter = express.Router();

bookRouter.post("/", createBook);

bookRouter.get("/", fetchAllBooks);

bookRouter.get("/search", searchBook);

bookRouter.get("/:id", fetchBookById);

bookRouter.delete("/:id", deleteBookById);

bookRouter.patch("/:id", updateBook);

bookRouter.get("/status/:status", fetchBooksByStatus)


module.exports = bookRouter;
