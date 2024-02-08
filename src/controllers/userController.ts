import { Request, Response } from "express";
import userService from "../services/userService";
import { StatusCodes } from "http-status-codes";
import response from '../utils/response';
import { loginService } from "../services/userService/login";

const registerUser = async (req: Request, res: Response) => {
  const user = req['Dto'];
  const result = await userService.userRegister(user);
  res.status(StatusCodes.OK).send(response(result));
}
const activeUser = async (req: Request, res: Response) => {
  const idUser = BigInt(req.params.id);
  const activeKey = req.body.activeKey
  await userService.activeUser(idUser, activeKey);
  res.status(StatusCodes.OK).send(response("active user success"));
}
const login = async (req: Request, res: Response) => {
  const { emailOrUserName, password } = req.body;
  const result = await loginService(emailOrUserName, password);
  return res.status(StatusCodes.OK).send(response(result));
}
export {
  registerUser,
  activeUser,
  login,
}