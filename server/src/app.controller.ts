import { Body, Controller, Get, Param } from "@nestjs/common";
import { AppService } from "./app.service";
import { App, Params } from "./interface/app.interface";
import { AppDTO } from "./dto/app.dto";

@Controller("/data/:countryId/:categoryId")
export class AppController {
  constructor(
    private readonly appService: AppService
  ) {}

  @Get()
  getData(@Param() params: Params, @Body() appDto: AppDTO) {
    const data = this.appService.getData(params, appDto);
    return data;
  }
}