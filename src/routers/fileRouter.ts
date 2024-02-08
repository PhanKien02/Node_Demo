import { Router } from "express";
import { fileFilter, fileStorage, limit } from "../middleware/uploadMiddleware";
import multer from "multer";
import catchAsync from "../utils/catchAsync";
import { uploadFIleController } from "../controllers/fileController";

const router = Router();

router.use(multer({
  storage: fileStorage,
  fileFilter: fileFilter,
  limits: limit
}).any());

router.post("/", catchAsync(uploadFIleController))

export default router;