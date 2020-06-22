const path = require("path");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const axios = require("axios");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static("public"));

const baseLink = "https://newsapi.org/v2/top-headlines?";
const country = "country=";
const category = "category=";
const apiKey = "apiKey=e2f31ffcb85c44bd856dbdc04bb78218";

app.get("/", async (req, res) => {
  const response = await axios.get(`${baseLink}${country}$gb&${category}general&${apiKey}`);

  res.send(response.data.articles);
});

app.get("/country/:countryId/category/:categoryId", async (req, res) => {
  const response = await axios.get(`${baseLink}${country}${req.params.countryId}&${category}${req.params.categoryId}&${apiKey}`);

  res.send(response.data.articles);
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`news_index project @ port ${port}!`);
});