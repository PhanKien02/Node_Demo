import { StatusCodes } from "http-status-codes";
import fileRepository from "../../repository/fileRepository";
import postRepository from "../../repository/postRepository";
import { ApiError } from "../../utils/apiError";
import { postUpdateDto } from "../../validators/postDto/updatePostDto";
import sequelize from "../../config/sequelize";
import { IFile } from "../../interfaces/IFile";


export const updatePostService = async (postDto: postUpdateDto) => {
  console.log(postDto.thumnails);
  let thumnails: IFile[] = []
  if (postDto.thumnails) {
    thumnails = postDto.thumnails.map(file => {
      return {
        path: file.destination,
        servicePath: `http://localhost:8080/export/${file.filename}`,
        size: file.size,
        name: file.originalname,
        typeFile: file.mimetype,
        postId: BigInt(postDto.id)
      }
    })
  }
  const post = await postRepository.repository.findOne({
    where: {
      id: postDto.id
    }
  });
  if (!post)
    throw new ApiError(StatusCodes.BAD_REQUEST, "post is not found");
  const t = await sequelize.transaction();
  try {
    post.title = postDto.title
    post.content = postDto.content
    post.source = postDto.source
    await fileRepository.repository.destroy({
      where: {
        postId: post.id
      }
    })
    await post.save({
      transaction: t
    });
    await fileRepository.repository.bulkCreate(thumnails);
    t.commit
    return post;
  } catch (error) {
    await t.rollback();
    throw new ApiError(StatusCodes.BAD_REQUEST, "update post failed")
  }

}