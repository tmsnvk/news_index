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

app.get("/country/:countryId/category/:categoryId", async (request, response) => {
  try {
    const { data } = await axios.get("https://newsapi.org/v2/top-headlines", {
      params: {
        country: request.params.countryId,
        category: request.params.categoryId,
        apiKey: process.env.REACT_APP_API_KEY
      },
    });
    
    response.send(data.articles);
  } catch (error) {
    return console.log(error);
  }
});

const port = process.env.PORT || 5001;

app.listen(port, () => {
  console.log(`news_index express/react/node project running @ port ${port}!`);
});