const express = require("express");
const router = express.Router();
const bookController = require("../controller/book.Controller");

//1: Get all books
router.get("/", bookController.getAllBooks); //Use Booksdb to use an objects and return it as array.

// router.get("/", bookController.getBooks);

//Isi API me query param me author/title bhejta hait oth books filter author wise kro..


//2: Get book by ID
router.get("/:id", bookController.getBookById);

// 3: Get books by Author
router.get("/author/:author", bookController.getBooksByAuthor);

// 4: Get books by Title
router.get("/title/:title", bookController.getBooksByTitle);

//5: Get books Review
router.get("/:id/reviews", bookController.getBookReview);

//6: Add a new book

router.post("/", bookController.addBooks);

module.exports = router;
