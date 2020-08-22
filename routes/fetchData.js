const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("/country/:countryId/category/:categoryId", async (request, response) => {
  try {
    const { data } = await axios({
      method: "get",
      url: "https://newsapi.org/v2/top-headlines",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
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

module.exports = router;