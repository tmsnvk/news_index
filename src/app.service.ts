import { HttpService, Injectable } from "@nestjs/common";
import { AxiosResponse } from "axios";
import { Observable } from "rxjs";
import { App } from "./app.interface";
import { AppDTO } from "./app.dto";

@Injectable()
export class AppService {
  constructor(private httpService: HttpService) {}

  async getData(country: string, category: string, dto: AppDTO): Promise<Observable<AxiosResponse<App[]>>> {
    try {
      const { data }: AppDTO = await this.httpService.get("https://newsapi.org/v2/top-headlines", {
        params: {
          country,
          category,
          apiKey: process.env.REACT_APP_API_KEY
        }
      }).toPromise();

      return data.articles.slice(0, 15);
    } catch (error) {
      console.log(`===> The error is - ${error} <===`);
    }
  }
}