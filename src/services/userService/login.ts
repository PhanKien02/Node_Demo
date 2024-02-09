import userRepository from "../../repository/userRepository"
import { ApiError } from "../../utils/apiError";
import { StatusCodes } from "http-status-codes";
import { comparePassword } from "../../utils/auth/password";
import { generateAccessToken } from "../../utils/auth/token";

export const loginService = async (emailOrUserName: string, password: string) => {
  const user = await userRepository.login(emailOrUserName);
  if (!user)
    throw new ApiError(StatusCodes.BAD_REQUEST, "email username or password is incorrect")
  if (!user.active)
    return {
      accessToken: null,
      refreshToken: null,
      expireInSeconds: 0,
      userId: user.id,
    }
  const checkPassword = await comparePassword(password, user.password);
  if (!checkPassword)
    if (!user)
      throw new ApiError(StatusCodes.BAD_REQUEST, "email username or password is incorrect")
  const accessToken = generateAccessToken(user.id, "user")
  const refreshToken = generateAccessToken(user.id, "user")
  return {
    accessToken: accessToken,
    refreshToken: refreshToken,
    expireInSeconds: 60,
    userId: user.id,
  }
}