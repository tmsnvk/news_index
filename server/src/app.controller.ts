import { Controller, Get, Param } from "@nestjs/common";
import { AxiosResponse } from "axios";
import { Observable } from "rxjs";
import { AppService } from "./app.service";
import { ParamsDTO } from "./app.dto";
import { AppInterface } from "./app.interface";

@Controller("/data/:countryId/:categoryId")
export class AppController {
  constructor(
    private readonly appService: AppService
  ) {}

  @Get()
  fetchData(@Param() params: ParamsDTO): Observable<AxiosResponse<AppInterface>>  {
    return this.appService.fetchData(params);
  }
}