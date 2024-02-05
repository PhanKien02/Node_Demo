import { plainToInstance } from "class-transformer";
import { validate } from "class-validator";
import { NextFunction, Request, Response } from "express";
import { ApiError } from "../utils/apiError";
import catchAsync from "../utils/catchAsync";
import { StatusCodes } from "http-status-codes";

export const validateMiddlewares = (ObjectDTO: any) => {
  return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const objectDTO = plainToInstance(ObjectDTO, req.body);

    const intance = await validate(objectDTO);
    if (intance.length > 0) {
      const messages = Object.values(intance[0].constraints)
      throw new ApiError(StatusCodes.BAD_REQUEST, messages[0]);
    }
    req['Dto'] = objectDTO;
    return next();
  })
}
