import { IsNotEmpty, IsString } from "class-validator";

export class postUpdateDto {

  @IsNotEmpty({ message: "id is require" })
  id: number;

  title: string;

  content: string;

  source: string;

  thumnails: Express.Multer.File[];
}