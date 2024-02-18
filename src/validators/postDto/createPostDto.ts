import { IsNotEmpty, IsString } from "class-validator";

export class postCreateDto {

  @IsString({ message: "title is string" })
  @IsNotEmpty({ message: "title is require" })
  title: string;

  @IsString({ message: "title is string" })
  @IsNotEmpty({ message: "title is require" })
  content: string;

  source: string;

  thumnails: Express.Multer.File[];
}