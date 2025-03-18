const express = require("express");
const router = express.Router();
const authorController = require("../controller/author.Controller");

router.get("/", authorController.getAuthors);
router.get("/:author", authorController.getBooksByAuthor);

module.exports = router;
