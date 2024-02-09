import { StatusCodes } from "http-status-codes";
import { IUser } from '../../interfaces/IUser';
import userRepository from "../../repository/userRepository";
import { ApiError } from "../../utils/apiError";
import { hashPassword } from "../../utils/auth/password";
import { UserCreateDto } from "../../validators/userDto/createUserDto";
import { genKeyActive } from "../../utils/auth/genKeyActive";
import { sendmail } from "../mailService/sendMail";
import { mailActive } from "../../utils/mail/mailActive";
import sequelize from "../../config/sequelize";

const userRegister = async (newUser: UserCreateDto) => {
  const checkuser = await userRepository.checkExistsUser(newUser.email, newUser.userName);
  if (checkuser)
    throw new ApiError(StatusCodes.BAD_REQUEST, "email or username already exists");
  const password = await hashPassword(newUser.password);
  const activeKey = genKeyActive()
  const user: IUser = {
    fullName: newUser.fullName,
    userName: newUser.userName,
    password: password,
    email: newUser.email,
    active: false,
    activeKey: activeKey,
  }
  const t = await sequelize.transaction();
  try {
    const userRegister = await userRepository.repository.create(user, { transaction: t })
    await sendmail(userRegister.email, "Active Account", mailActive(userRegister.fullName, userRegister.activeKey));
    await t.commit();
    return userRegister;
  } catch (error) {
    console.log({ error });
    await t.rollback()

  }

}
export default userRegister