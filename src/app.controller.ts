import { Body, Controller, Get, Param } from "@nestjs/common";
import { AppService } from "./app.service";
import { App, Params } from "./app.interface";
import { AppDTO } from "./app.dto";

@Controller("/data/country/:country/category/:category")
export class AppController {
  constructor(
    private readonly AppService: AppService
  ) {}

  @Get()
  async getData(@Param() params: Params, @Body() appDto: AppDTO): Promise<App> {
    const data: AppDTO = await this.AppService.getData(params, appDto);
    return data;
  }
}