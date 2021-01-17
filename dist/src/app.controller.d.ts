import { AppService } from "./app.service";
import { App, Params } from "./app.interface";
import { AppDTO } from "./app.dto";
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getData(params: Params, appDto: AppDTO): Promise<App>;
}
