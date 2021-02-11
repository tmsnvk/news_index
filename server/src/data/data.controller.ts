import { Controller, Get, Param } from "@nestjs/common";
import { Observable } from "rxjs";
import { AxiosResponse } from "axios";
import { DataService } from "./data.service";
import { FetchDataParamsDTO } from "./data.dto";
import { FetchDataInterface } from "./data.interface";

@Controller("/data/:countryId/:categoryId")
export class DataController {
  constructor(
    private readonly dataService: DataService
  ) {}

  @Get()
  fetchData(@Param() params: FetchDataParamsDTO): Observable<AxiosResponse<FetchDataInterface>> {
    return this.dataService.fetchData(params);
  }
}