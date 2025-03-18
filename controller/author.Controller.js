

    const books = require("../booksdb"); // Import book data

    // Get all books by a specific author
    exports.getBooksByAuthor = async (req, res) => {
    //   const authorName = decodeURIComponent(req.params.author); // Decode URL param
      const authorName = (req.params.author); // Decode URL param

    const filteredBooks = Object.values(books).filter((b) => b.author === authorName); // Filter books
    
      if (filteredBooks.length === 0) {
        return res.status(404).json({ message: "No books found for this author" });
      }
    
      res.json(filteredBooks);
    };

    exports.getAuthors = async (req, res, next) => {
        res.send("Get all authors");
        };
    