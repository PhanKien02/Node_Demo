import { Router } from "express";
import catchAsync from "../utils/catchAsync";
import { createPost, deletePost, getAllPost, getPostById, updatePost } from "../controllers/postController";
import { validateMiddlewares } from "../middleware/validatorMiddleware";
import { postCreateDto } from "../validators/postDto/createPostDto";
import multer from "multer";
import { fileFilter, fileStorage, limit } from "../middleware/uploadMiddleware";
import { postUpdateDto } from "../validators/postDto/updatePostDto";
import { authMiddleware } from "../middleware/authMiddleware";

const router = Router();

router.use(authMiddleware);

router.get("/", catchAsync(getAllPost))

router.get("/:id", catchAsync(getPostById))

router.post("/", multer({
  storage: fileStorage,
  fileFilter: fileFilter,
  limits: limit
}).any(), validateMiddlewares(postCreateDto), catchAsync(createPost))

router.put("/", multer({
  storage: fileStorage,
  fileFilter: fileFilter,
  limits: limit
}).any(), validateMiddlewares(postUpdateDto), catchAsync(updatePost))

router.delete("/:id", catchAsync(deletePost))

export default router;