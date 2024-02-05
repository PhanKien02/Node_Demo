import { compare, hash } from "bcryptjs";
export const hashPassword = async (password: string) => {
  return await hash(password, 10);
}

export const comparePassword = async (password: string, hashPassword: string) => {
  return await compare(password, hashPassword)
}