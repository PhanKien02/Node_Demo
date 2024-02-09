import { Transform } from "class-transformer";
import { IsEmail, IsNotEmpty, IsString, Length } from "class-validator";

export class UserCreateDto {

  @IsString({ message: "full name is string" })
  @IsNotEmpty({ message: "full Name is require" })
  fullName: string;

  @IsNotEmpty({ message: "userName is require" })
  userName: string;

  @Length(6, 20)
  @Transform(({ value }) => value.trim())
  @IsNotEmpty({ message: "password is require" })
  password: string;

  @IsEmail({}, { message: "Email invalidate" })
  @IsNotEmpty({ message: "email is require" })
  email: string;
}