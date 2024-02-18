import { StatusCodes } from "http-status-codes";
import postRepository from "../../repository/postRepository"
import { ApiError } from "../../utils/apiError";

export const deletePost = async (id: number) => {
  const postDelete = await postRepository.repository.findByPk(id);
  if (!postDelete)
    throw new ApiError(StatusCodes.BAD_REQUEST, "post is not found");
  else
    await postRepository.repository.destroy({
      where: {
        id: id
      }
    })
}