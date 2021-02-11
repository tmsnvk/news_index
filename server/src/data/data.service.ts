import { HttpService, Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { AxiosResponse } from "axios";
import { Observable } from "rxjs";
import { catchError, map } from "rxjs/operators";
import { FetchDataParamsDTO } from "./data.dto";
import { FetchDataInterface } from "./data.interface";
import { API_ROOT } from "./data.helper.constants";

@Injectable()
export class DataService {
  constructor(
    private httpService: HttpService,
    private configService: ConfigService
  ) {}

  fetchData(params: FetchDataParamsDTO): Observable<AxiosResponse<FetchDataInterface>> {
    return this.httpService.get(API_ROOT, {
      headers: { "Content-Type": "application/json" },
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