import { Router, Request, Response } from "express";
const router = Router();
import axios from "axios";

router.get("/country/:countryId/category/:categoryId", async (request: Request, response: Response) => {
  try {
    const { data }: any = await axios.get("https://newsapi.org/v2/top-headlines", {
      params: {
        country: request.params.countryId,
        category: request.params.categoryId,
        apiKey: process.env.REACT_APP_API_KEY
      }
    });

    response.send(data.articles);
  } catch (error: any) {
    return console.log(error);
  }
});

module.exports = router;