import express from "express";
import createHomepageTemplate from "./views/index.js";
import listOfBooks from "./views/list.js";
import createBookTemplate from "./views/book.js";
import BOOKS_DATA from "./data/data.js";
import createEditFormTemplate from "./views/edit.js";

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));

app.get("/", (_, res) => {
  res.send(createHomepageTemplate());
});

app.get("/books", (_, res) => {
  res.send(listOfBooks());
});

app.get("/books/:id", (req, res) => {
  const { id } = req.params;
  const book = BOOKS_DATA.find((b) => b.id === id);
  res.send(createBookTemplate(book));
});

app.get("/books/edit/:id", (req, res) => {
  const { id } = req.params;
  const book = BOOKS_DATA.find((b) => b.id === id);
  res.send(createEditFormTemplate(book));
});

app.post("/books", (req, res) => {
  const { title, author } = req.body;
  const id = Math.random().toString();
  BOOKS_DATA.push({ id, title, author });
  res.redirect(`/books/${id}`);
});

app.put("/books/:id", (req, res) => {
  const { id } = req.params;
  const { author, title } = req.body;
  const newBook = { author, id, title };
  const idx = BOOKS_DATA.findIndex((b) => b.id === id);
  BOOKS_DATA[idx] = newBook;
  res.send(createBookTemplate(newBook));
});

app.delete("/books/:id", (req, res) => {
  const { id } = req.params;
  const book = BOOKS_DATA.findIndex((b) => b.id === id);
  BOOKS_DATA.splice(book, 1);
  res.send();
});

const PORT = 3000;

app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  }
  console.log(`Server Started on PORT ${PORT}`);
});
