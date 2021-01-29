import { HttpService, Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { Observable } from "rxjs";
import { catchError, map } from "rxjs/operators";
import { ParamsDTO } from "./app.dto";
import { AppInterface } from "./app.interface";

@Injectable()
export class AppService {
  constructor(
    private httpService: HttpService,
    private configService: ConfigService
  ) {}

  fetchData(params: ParamsDTO): Observable<AppInterface> {
    return this.httpService.get("https://newsapi.org/v2/top-headlines", {
      params: {
        country: params.countryId,
        category: params.categoryId,
        apiKey: this.configService.get<string>("API_KEY")
      }
    }).pipe(
      map(({ data }) => data.articles.slice(0, 15)),
      catchError((error) => {
        throw `===> The error is - ${error} <===`;
      })
    )
  }
}