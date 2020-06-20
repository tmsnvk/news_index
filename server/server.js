const path = require("path");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(path.resolve("./index.html"));
  res.redirect("/gb");
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`news_index project @ port ${port}!`);
});