import { Router } from "express";
import { activeUser, registerUser } from "../controllers/userController";
import { validateMiddlewares } from "../middleware/validatorMiddleware";
import { UserCreateDto } from "../validators/userDto/createUserDto";
import catchAsync from "../utils/catchAsync";
const router = Router();

router.post("/", validateMiddlewares(UserCreateDto), catchAsync(registerUser))
router.post("/active/:id", catchAsync(activeUser))
export default router;