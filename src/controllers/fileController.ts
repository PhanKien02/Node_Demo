import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { fileService } from "../services/fileService";

const uploadFIleController = async (req: Request, res: Response) => {
  const files = req.files as Express.Multer.File[];
  const result = await fileService.uploadFileService(files);
  res.status(StatusCodes.OK).send(result)
}
export {
  uploadFIleController
}