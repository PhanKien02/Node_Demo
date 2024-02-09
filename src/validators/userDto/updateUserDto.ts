import { Transform } from "class-transformer";
import { IsBoolean, IsEmail, IsNotEmpty, IsOptional, IsString, IsUrl, Length } from "class-validator";

export class UserUpdateDto {

  @IsNotEmpty()
  id: bigint

  @IsString({ message: "fullName is string" })
  @IsOptional()
  fullName?: string;

  @IsString({ message: "userName is string" })
  @IsOptional()
  userName?: string;

  @IsOptional()
  @Transform(({ value }) => value.trim())
  @IsString({ message: "password is string" })
  password?: string;

  @IsOptional()
  @IsEmail({}, { message: "Email invalidate" })
  email?: string;

  @IsOptional()
  @Length(10, 10, { message: "Phone invalidate" })
  phone?: string;

  @IsOptional()
  age?: number;

  @IsOptional()
  @IsString({ message: "address is string" })
  address?: string;

  @IsOptional()
  @IsBoolean({ message: "gender is boolean" })
  gender?: boolean;

  avatar?: string;
}