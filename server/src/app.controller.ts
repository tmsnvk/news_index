import { Body, Controller, Get, Param } from "@nestjs/common";
import { AppService } from "./app.service";
import { Params } from "./app.interface";
import { AppDTO } from "./app.dto";

@Controller("/data/:country/:category")
export class AppController {
  constructor(
    private readonly appService: AppService
  ) {}

  @Get()
  async getData(@Param() params: Params, @Body() appDto: AppDTO): Promise<AppDTO> {
    const data: AppDTO = await this.appService.getData(params, appDto);
    return data;
  }
}