import { StatusCodes } from 'http-status-codes';
import errorResponse from '../utils/errorResponse';
import { ApiError } from '../utils/apiError';
import { Request, Response, NextFunction } from "express"


export const errorHandler = async (err: any, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof ApiError) {
    console.log(err);

    return res.status(err.code).json(errorResponse(err.message, err.details, err.code))
  }
  return res.status(500).json(errorResponse(err.message))
}

export const notFoundHandler = (_: Request, __: Response, next: NextFunction) => {
  return next(new ApiError(StatusCodes.NOT_FOUND, "404 Not Found"));
};