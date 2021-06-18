const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Success");
});

app.listen(PORT, "localhost", () => {
    console.log(`App listening at http://localhost:${PORT}`);
});