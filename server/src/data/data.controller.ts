import { Body, Controller, Get, Param } from "@nestjs/common";
import { DataService } from "./data.service";
import { Data, Params } from "../app.interface";
import { DataDTO } from "../app.dto";

@Controller("/data/country/:country/category/:category")
export class DataController {
  constructor(
    private readonly dataService: DataService
  ) {}

  @Get()
  async getData(@Param() params: Params, @Body() appDto: DataDTO): Promise<Data> {
    const data: DataDTO = await this.dataService.getData(params, appDto);
    return data;
  }
}