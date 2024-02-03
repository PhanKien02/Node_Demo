import errorResponse from '../utils/errorResponse';
import { ApiError } from './../utils/apiError';
import { Request, Response, NextFunction } from "express"


export const errorHandler = async (err: any, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof ApiError) {
    return res.status(err.code).json(errorResponse(err.message, err.details))
  }
  return res.status(500).json(errorResponse(err.message))
}