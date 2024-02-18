import { StatusCodes } from "http-status-codes";
import postRepository from "../../repository/postRepository"
import { ApiError } from "../../utils/apiError";
import fileRepository from "../../repository/fileRepository";

export const getPostById = async (id: number) => {
  const post = await postRepository.repository.findByPk(id, {
    include: [fileRepository.repository]
  });
  if (!post)
    throw new ApiError(StatusCodes.BAD_REQUEST, "post is not found");
  else
    return post;
}