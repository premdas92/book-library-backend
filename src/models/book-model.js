const mongoose = require("mongoose");

const { Schema } = mongoose;

const bookSchema = new Schema(
  {
    title: { type: String, required: true, unique: true, minLength: 4, maxLength: 100 },
    author: { type: String, required: true, minLength: 4, maxLength: 30 },
    status: { type: String, enum: ["read", "unread"], default: "unread" },
    description: {
      type: String,
      required: true,
      minLength: 10,
      maxLength: 1000,
    },
    date: { type: Date, default: Date.now },
  },
  {
    timestamps: true,
  }
);

const Book = mongoose.model("Books", bookSchema);
module.exports = Book;