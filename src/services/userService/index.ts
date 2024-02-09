import userRegister from "./userRegister";
import activeUser from './activeUser';
import { loginService } from './login';
import updateUserService from "./updateUser";

const userService = {
  userRegister,
  activeUser,
  loginService,
  updateUserService
}
export default userService;