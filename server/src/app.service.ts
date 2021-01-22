import { HttpService, Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { AxiosResponse } from "axios";
import { ParamsDTO } from "./app.dto";
import { AppInterface } from "./app.interface";

@Injectable()
export class AppService {
  constructor(
    private httpService: HttpService,
    private configService: ConfigService
  ) {}

  fetchData(params: ParamsDTO): Observable<AxiosResponse<AppInterface>> {
    try {
      return this.httpService.get("https://newsapi.org/v2/top-headlines", {
        params: {
          country: params.countryId,
          category: params.categoryId,
          apiKey: this.configService.get<string>("API_KEY")
        }
      }).pipe(
        map((response) => response.data.articles.slice(0, 15))
        );
    } catch (error) {
      console.log(`===> The error is - ${error} <===`);
    }
  }
}