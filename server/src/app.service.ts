import { HttpService, Injectable } from "@nestjs/common";
import { App, Params } from "./interface/app.interface";
import { AppDTO } from "./dto/app.dto";

@Injectable()
export class AppService {
  constructor(
    private httpService: HttpService
  ) {}

  async getData(params: Params, dataDto: AppDTO) {
    try {
      const { data } = await this.httpService.get("https://newsapi.org/v2/top-headlines", {
        params: {
          country: params.country,
          category: params.category,
          apiKey: process.env.REACT_APP_API_KEY
        }
      }).toPromise();

      return data.articles.slice(0, 15);
    } catch (error) {
      console.log(`===> The error is - ${error} <===`);
    }
  }
}