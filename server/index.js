const express = require("express");
const { Article } = require("./api");
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Fullstack app is running!");
});

app.get("/read", Article.articleRead);
app.post("/create", Article.articleCreate);
app.patch("/update", Article.articleUpdate);
app.delete("/delete/:id", Article.articleDelete);

app.listen(PORT, "localhost", () => {
  console.log(`App listening at http://localhost:${PORT}`);
});
