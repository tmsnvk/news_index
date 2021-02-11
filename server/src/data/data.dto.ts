import { IsString } from "class-validator";

export class FetchDataParamsDTO {
  @IsString()
  readonly countryId: string;

  @IsString()
  readonly categoryId: string;
}