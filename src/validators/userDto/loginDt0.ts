import { Transform } from "class-transformer";
import { IsNotEmpty, Length, min } from "class-validator";

export class loginDto {
  @IsNotEmpty({ message: "userName or email is require" })
  emailOrUserName: string;


  @IsNotEmpty({ message: "password is require" })
  @Length(6, 20)
  @Transform(({ value }) => value.trim())
  password: string;
}