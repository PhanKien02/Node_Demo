import { Router } from "express";
import { activeUser, login, registerUser } from "../controllers/userController";
import { validateMiddlewares } from "../middleware/validatorMiddleware";
import { UserCreateDto } from "../validators/userDto/createUserDto";
import catchAsync from "../utils/catchAsync";
import { loginDto } from "../validators/userDto/loginDt0";
const router = Router();

router.post("/", validateMiddlewares(UserCreateDto), catchAsync(registerUser));
router.post("/login", validateMiddlewares(loginDto), catchAsync(login));
router.post("/active/:id", catchAsync(activeUser));
export default router;