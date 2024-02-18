import { Request, Response } from "express";
import postService from "../services/postService";
import { StatusCodes } from "http-status-codes";
import response from "../utils/response";
import { postCreateDto } from "../validators/postDto/createPostDto";
import { postUpdateDto } from "../validators/postDto/updatePostDto";

const getAllPost = async (req: Request, res: Response) => {
  const result = await postService.getAllPostService();
  return res.status(StatusCodes.OK).send(response(result));
}

const createPost = async (req: Request, res: Response) => {
  const post: postCreateDto = req['Dto'];
  const thumnails = req.files as Express.Multer.File[];
  thumnails ? post.thumnails = thumnails : null
  const result = await postService.createPostService(post);
  return res.status(StatusCodes.OK).send(response(result));
}
const updatePost = async (req: Request, res: Response) => {
  const post: postUpdateDto = req['Dto'];
  const result = await postService.updatePostService(post);
  return res.status(StatusCodes.OK).send(response(result));
}
const getPostById = async (req: Request, res: Response) => {
  const postId = +req.params.id;
  const result = await postService.getPostById(postId)
  return res.status(StatusCodes.OK).send(response(result));
}
const deletePost = async (req: Request, res: Response) => {
  const postId = +req.params.id;
  await postService.deletePost(postId)
  return res.status(StatusCodes.OK).send(response("delete post success"));
}
export {
  createPost,
  getAllPost,
  getPostById,
  updatePost,
  deletePost
};