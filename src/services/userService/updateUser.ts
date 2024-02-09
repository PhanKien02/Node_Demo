import { StatusCodes } from "http-status-codes";
import userRepository from "../../repository/userRepository";
import { ApiError } from "../../utils/apiError";
import { UserUpdateDto } from "../../validators/userDto/updateUserDto";
import { IUser } from "../../interfaces/IUser";

const updateUserService = async (userUpdate: UserUpdateDto) => {
  const user = await userRepository.repository.findOne({
    where: {
      id: userUpdate.id,
      active: true
    }
  });
  if (!user)
    throw new ApiError(StatusCodes.BAD_REQUEST, "user not found");
  const updateUser: IUser = {
    fullName: userUpdate.fullName,
    gender: userUpdate.gender,
    userName: userUpdate.userName,
    email: userUpdate.email,
    age: userUpdate.age,
    phone: userUpdate.phone,
    address: userUpdate.address,
    avatar: userUpdate.avatar
  };
  await userRepository.repository.update(updateUser, {
    where: {
      id: user.id
    }
  })
}
export default updateUserService;