import { IsString } from "class-validator";

export class ParamsDTO {
  @IsString()
  readonly countryId: string;

  @IsString()
  readonly categoryId: number;
}