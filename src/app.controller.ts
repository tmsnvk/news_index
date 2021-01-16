import { Controller, Get, Param, Response } from "@nestjs/common";
import { AppService } from "./app.service";
import { App } from "./app.interface";
import { AppDTO } from "./app.dto";

@Controller("/country/:country/category/:category")
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getData(@Response() response: Response, @Param("country") country: string, @Param("category") category: string, dto: AppDTO): Promise<App[]> {
    const data = await this.appService.getData(country, category, dto);
    return response.json(data);
  }
}