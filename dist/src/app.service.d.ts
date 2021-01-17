import { HttpService } from "@nestjs/common";
import { Params } from "./app.interface";
import { AppDTO } from "./app.dto";
export declare class AppService {
    private httpService;
    constructor(httpService: HttpService);
    getData(params: Params, appDto: AppDTO): Promise<any>;
}
