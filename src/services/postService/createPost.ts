import { StatusCodes } from "http-status-codes";
import sequelize from "../../config/sequelize";
import { IFile } from "../../interfaces/IFile";
import File from "../../models/file";
import Post from "../../models/post";
import fileRepository from "../../repository/fileRepository";
import postRepository from "../../repository/postRepository";
import { ApiError } from "../../utils/apiError";
import { postCreateDto } from "../../validators/postDto/createPostDto";

export const createPostService = async (postDto: postCreateDto) => {
  const thumnails: IFile[] = postDto.thumnails.map(file => {
    return {
      path: file.destination,
      servicePath: `http://localhost:8080/export/${file.filename}`,
      size: file.size,
      name: file.originalname,
      typeFile: file.mimetype,
    }
  })
  const t = await sequelize.transaction();
  try {
    const newpost = await postRepository.repository.create({
      title: postDto.title,
      content: postDto.content,
      source: postDto.source,
      thumnails: thumnails
    }, {
      include: [{ model: fileRepository.repository, as: "thumnails", association: "thumnails" }],
      transaction: t
    })
    await t.commit();
    return newpost;
  } catch (error) {
    throw new ApiError(StatusCodes.BAD_REQUEST, "create post failed")
  }
}