import { Router, Request, Response } from "express";
import axios from "axios";
const router = Router();

router.get("/country/:countryId/category/:categoryId", async (request: Request, response: Response) => {
  try {
    const { data } = await axios({
      method: "get",
      url: "https://newsapi.org/v2/top-headlines",
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