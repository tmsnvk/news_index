import { Request, Response, Router } from "express";
import axios from "axios";

type TData = {
  articles: {
    description: string;
    publishedAt: string;
    source?: {
      name: string;
    };
    title: string;
    url: string;
    urlToImage: string;
  }[]
}

const router = Router();

router.get("/data/country/:countryId/category/:categoryId", async (request: Request, response: Response) => {
  try {
    const { categoryId, countryId } = request.params;

    const { data } = await axios.get<TData>("https://newsapi.org/v2/top-headlines", {
      params: {
        country: countryId,
        category: categoryId,
        apiKey: process.env.REACT_APP_API_KEY
      }
    });

    response.send(data.articles);
  } catch (error) {
    return console.log(`===> Data fetch has failed. The error message is - ${error} <===`);
  }
});

module.exports = router;