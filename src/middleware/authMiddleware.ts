import { Request, Response, NextFunction, response } from "express";
import jwt from "jsonwebtoken";
import errorResponse from "../utils/errorResponse";

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers['authorization'];
  if (!token) {
    res.status(401).send(errorResponse("Unauthorized"));
  } else {
    const accessToken = token.split(" ")[1];
    const decoded = jwt.verify(accessToken, process.env.JWT_ACCESS_SECRET);
    req["user"] = decoded['id'];
    next();
  }
}
