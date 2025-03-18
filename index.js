const express = require("express");
// const bodyParser = require("body-parser");
const bookRoutes = require("./routes/book.Routes");
const authorRoutes = require("./routes/author.Routes");

const app = express();
const PORT = 3000;

app.use(express.json()); //will parse firstly

// Book and Author Routes
app.use("/books", bookRoutes);
app.use("/author", authorRoutes);
app.use((req, res, next) => { res.status(404).send('Sorry, that route does not exist.'); });

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
