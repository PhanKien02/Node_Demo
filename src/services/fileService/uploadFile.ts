import { StatusCodes } from "http-status-codes";
import { IFile } from "../../interfaces/IFile";
import fileRepository from "../../repository/fileRepository";
import { ApiError } from "../../utils/apiError";


export const uploadFileService = async (files: Express.Multer.File[]) => {
  const fileUploads: IFile[] = files.map(file => {
    return {
      path: file.destination,
      servicePath: `http://localhost:8080/export/${file.filename}`,
      size: file.size,
      name: file.originalname,
      typeFile: file.mimetype,
    }
  })
  try {
    fileUploads.forEach(async (file) => {
      await fileRepository.repository.create(file)
    });
    return fileUploads;
  } catch (error) {
    throw new ApiError(StatusCodes.BAD_REQUEST, "upload images failed")
  }

}