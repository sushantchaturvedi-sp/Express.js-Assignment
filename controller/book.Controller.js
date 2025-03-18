const books = require("../booksdb");

//1: Get all books
exports.getAllBooks = async (req, res, next) => {
    const title = req.query.title.toLowerCase();
    const filteredBooks = Object.values(books).filter(book => book.title.toLowerCase().includes(title));
    res.send(filteredBooks);

};

//2: Get book by ID
exports.getBookById = (req, res) => {
    const book = books[req.params.id];
    res.send(book);
};

//3: Get all books by author
exports.getBooksByAuthor = (req, res) => {
    const author = req.params.author.toLowerCase();
    const filteredBooks = Object.values(books).filter(book => book.author.toLowerCase().includes(author));
    res.send(filteredBooks);
};

//4: Get all books by title
exports.getBooksByTitle = (req, res) => {
    // console.log(req.params,req.body,req.query)
    const title = req.params.title.toLowerCase();
    const filteredBooks = Object.values(books).filter(book => book.title.toLowerCase().includes(title));
    res.send(filteredBooks);
};

// 5: Get book Review
exports.getBookReview = (req, res) => {
    const book = books[req.params.id];
    res.json(book.reviews);
};



//6. Add Book
exports.addBooks = async (req, res, next) => {
    // res.send({ "Name": "Rujan Jod" });
    console.log(req.body)
    const newBook = {
        id: req.body.id,
        author: req.body.author,
        title: req.body.title,
        reviews: []
    };
    books.push(newBook);
    // res.send(newBook);
    res.send(books);

};