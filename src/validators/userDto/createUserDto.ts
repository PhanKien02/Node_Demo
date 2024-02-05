import { IsEmail, IsNotEmpty, IsString, Length } from "class-validator";

export class UserCreateDto {

  @IsString({ message: "full name is string" })
  @IsNotEmpty({ message: "full Name is require" })
  fullName: string;

  @IsNotEmpty({ message: "userName is require" })
  userName: string;
  @IsNotEmpty({ message: "password is require" })
  password: string;

  @IsEmail({}, { message: "Email invalidate" })
  @IsNotEmpty({ message: "email is require" })
  email: string;

  @Length(10, 10, { message: "Phone invalidate" })
  @IsNotEmpty({ message: "phone is require" })
  phone: string;

  age?: string;

  address?: string;

  sex?: boolean;

}