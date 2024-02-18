import { StatusCodes } from "http-status-codes";
import fileRepository from "../../repository/fileRepository";
import postRepository from "../../repository/postRepository";
import { ApiError } from "../../utils/apiError";
import { postUpdateDto } from "../../validators/postDto/updatePostDto";


export const updatePostService = async (postDto: postUpdateDto) => {
  const post = await postRepository.repository.findOne({
    where: {
      id: postDto.id
    },
    include: [
      { model: fileRepository.repository }
    ]
  });
  if (!post)
    throw new ApiError(StatusCodes.BAD_REQUEST, "post is not found");
  try {
    post.title = postDto.title
    post.content = postDto.content
    post.source = postDto.source
    return await post.update(post);
  } catch (error) {
    throw new ApiError(StatusCodes.BAD_REQUEST, "update post failed")
  }

}