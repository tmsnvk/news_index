"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataService = void 0;
const common_1 = require("@nestjs/common");
let DataService = class DataService {
    constructor(httpService) {
        this.httpService = httpService;
    }
    async getData(params, dataDto) {
        try {
            const { data } = await this.httpService.get("https://newsapi.org/v2/top-headlines", {
                params: {
                    country: params.country,
                    category: params.category,
                    apiKey: process.env.REACT_APP_API_KEY
                }
            }).toPromise();
            return data.articles.slice(0, 15);
        }
        catch (error) {
            console.log(`===> The error is - ${error} <===`);
        }
    }
};
DataService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [common_1.HttpService])
], DataService);
exports.DataService = DataService;
//# sourceMappingURL=data.service.js.map