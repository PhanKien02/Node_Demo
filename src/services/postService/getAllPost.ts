import File from "../../models/file";
import fileRepository from "../../repository/fileRepository";
import postRepository from "../../repository/postRepository";

export const getAllPostService = async () => {
  try {
    const posts = await postRepository.repository.findAll({
      include: fileRepository.repository
    });
    return posts;
  } catch (error) {
    console.log("errr", error);
  }
}