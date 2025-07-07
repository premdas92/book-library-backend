const Book = require("../models/book-model");

// Create a book
const createBook = async (req, res) => {
  const { title, author, status, description } = req.body;
  try {
    const book = new Book({
      title,
      author,
      status,
      description,
      date: new Date(Date.now()),
    });
    await book.save();
    res.status(201).json({ message: "Book created", book });
  } catch (err) {
    if (err.code === 11000) {
      return res.status(400).json({
        error: `A book with the title ${err.keyValue.title} already exists. Please choose a different title`,
      });
    }
    res.status(400).json({ error: err.message });
  }
};

// Fetch all books
const fetchAllBooks = async (req, res) => {
  try {
    const allBooks = await Book.find({}).sort({ createdAt: -1 });
    res.status(200).json(allBooks);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Fetch a book by id
const fetchBookById = async (req, res) => {
  try {
    const bookId = req.params?.id;
    const book = await Book.findOne({ _id: bookId });
    res.status(200).json(book);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete a book
const deleteBookById = async (req, res) => {
  try {
    const bookId = req.params?.id;
    const bookToDelete = await Book.findByIdAndDelete(bookId);
    res.status(200).json({
      message: "Book deleted",
      book: bookToDelete,
    });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Update a book
const updateBook = async (req, res) => {
  const ALLOWED_UPDATES = ["status"];
  try {
    const bookId = req.params?.id;
    const dataToUpdate = req.body;

    const isUpdateAllowed = Object.keys(dataToUpdate).every((k) =>
      ALLOWED_UPDATES.includes(k)
    );
    if (!isUpdateAllowed) {
      throw new Error("Update not Allowed");
    }

    await Book.findByIdAndUpdate(bookId, dataToUpdate, {
      runValidators: true,
      new: true,
    });

    res.status(200).json({
      message: "Status Updated",
    });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Fetch books by status
const fetchBooksByStatus = async (req, res) => {
  try {
    const bookStatus = req.params?.status;
    const books = await Book.find({ status: bookStatus }).sort({
      createdAt: -1,
    });
    res.status(200).json(books);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Search a book
const searchBook = async (req, res) => {
  try {
    const { q } = req.query;
    const regex = new RegExp(q, "i");
    const books = await Book.find({
      $or: [{ title: regex }, { author: regex }],
    }).sort({
      createdAt: -1,
    });
    res.status(200).json(books);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = {
  createBook,
  fetchAllBooks,
  fetchBookById,
  deleteBookById,
  updateBook,
  fetchBooksByStatus,
  searchBook,
};
