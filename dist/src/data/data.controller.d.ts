import { DataService } from "./data.service";
import { Data, Params } from "./data.interface";
import { DataDTO } from "./data.dto";
export declare class DataController {
    private readonly dataService;
    constructor(dataService: DataService);
    getData(params: Params, appDto: DataDTO): Promise<Data>;
}
