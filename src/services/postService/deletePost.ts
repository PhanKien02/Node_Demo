import { StatusCodes } from "http-status-codes";
import postRepository from "../../repository/postRepository"
import { ApiError } from "../../utils/apiError";
import sequelize from "../../config/sequelize";
import fileRepository from "../../repository/fileRepository";

export const deletePost = async (id: number) => {
  const postDelete = await postRepository.repository.findByPk(id);
  if (!postDelete)
    throw new ApiError(StatusCodes.BAD_REQUEST, "post is not found");
  else {
    const t = await sequelize.transaction();
    try {
      await postRepository.repository.destroy({
        where: {
          id: id
        },
        transaction: t
      })
      await fileRepository.repository.destroy({
        where: {
          postId: postDelete.id
        },
        transaction: t
      })

      await t.commit()
    } catch (error) {
      console.log(error);
      await t.rollback();
      throw new ApiError(StatusCodes.BAD_REQUEST, "delete post failed");
    }
  }
}