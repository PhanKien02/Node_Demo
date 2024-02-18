import { createPostService } from './createPost';
import { getAllPostService } from './getAllPost';
import { updatePostService } from './updatePost';
import { deletePost } from './deletePost';
import { getPostById } from './getPostById';
const postService = {
  createPostService,
  updatePostService,
  getAllPostService,
  getPostById,
  deletePost
}
export default postService;