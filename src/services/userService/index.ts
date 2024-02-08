import userRegister from "./userRegister";
import activeUser from './activeUser';
import { loginService } from './login';

const userService = {
  userRegister,
  activeUser,
  loginService
}
export default userService;