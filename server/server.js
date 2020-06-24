const path = require("path");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const helmet = require("helmet");
const axios = require("axios");

require("dotenv").config();

const publicPath = path.join(__dirname, "..", "client/public");

const app = express();

app.use(cors());
app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(publicPath));

const baseURL = "https://newsapi.org/v2/top-headlines?";
const country = "country=";
const category = "category=";
const apiKey = `apiKey=${process.env.REACT_APP_API_KEY}`;

app.get("/country/:countryId/category/:categoryId", async (req, res) => {
  const response = await axios.get(`${baseURL}${country}${req.params.countryId}&${category}${req.params.categoryId}&${apiKey}`);

  res.send(response.data.articles);
});

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`news_index project @ port ${port}!`);
});