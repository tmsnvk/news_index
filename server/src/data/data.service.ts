import { HttpService, Injectable } from "@nestjs/common";
import { Data, Params } from "../app.interface";
import { DataDTO } from "../app.dto";

@Injectable()
export class DataService {
  constructor(
    private httpService: HttpService
  ) {}

  async getData(params: Params, dataDto: DataDTO): Promise<any> {
    try {
      const { data }: DataDTO = await this.httpService.get("https://newsapi.org/v2/top-headlines", {
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