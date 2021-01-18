import { HttpService } from "@nestjs/common";
import { Params } from "./data.interface";
import { DataDTO } from "./data.dto";
export declare class DataService {
    private httpService;
    constructor(httpService: HttpService);
    getData(params: Params, dataDto: DataDTO): Promise<any>;
}
