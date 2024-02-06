import { Request, Response } from "express";
import userService from "../services/userService";
import { StatusCodes } from "http-status-codes";
import response from '../utils/response';

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
export {
  registerUser,
  activeUser
}