import { CatsService } from './cats.service';
import { CreateCatDto } from './dto/create-cat.dto';
export declare class CatsController {
    private readonly catsService;
    constructor(catsService: CatsService);
    create(createCatDto: CreateCatDto): string;
    findAll(): void;
}
