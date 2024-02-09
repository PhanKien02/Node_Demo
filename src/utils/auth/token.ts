import { Request, Response } from "express";
import jwt from "jsonwebtoken";
require('dotenv').config()
export const generateAccessToken = (id: bigint, roleNames: string): string => {
  return jwt.sign({ id, roleNames }, process.env.JWT_ACCESS_SECRET, { expiresIn: "60s" });
}

export const generateRefreshToken = (id: bigint, roleNames: string): string => {
  return jwt.sign({ id, roleNames }, process.env.JWT_REFRESH_SECRET, { expiresIn: "7d" });
}

export const requestRefreshToken = (req: Request, res: Response) => {
  const refreshToken = req.cookies.refreshToken;
  if (!refreshToken) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {
    const decodedToken = jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET) as {
      id: bigint;
      roleNames: string;
    };
    const accessToken = generateAccessToken(decodedToken.id, decodedToken.roleNames);
    const newRefreshToken = generateRefreshToken(decodedToken.id, decodedToken.roleNames);

    return res.status(200).json({ accessToken, refreshToken: newRefreshToken });
  } catch (error) {
    return res.status(401).json({ message: "Unauthorized" });
  }
}