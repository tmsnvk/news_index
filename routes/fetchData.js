const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("/country/:countryId/category/:categoryId", async (request, response) => {
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

module.exports = router;