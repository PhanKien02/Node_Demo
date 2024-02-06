import { Op } from "sequelize"
import userRepository from "../../repository/userRepository"
import { ApiError } from "../../utils/apiError"
import { StatusCodes } from "http-status-codes"
import User from "../../models/user"

const activeUser = async (idUser: bigint, activeKey: string) => {
  const userActive = await userRepository.repository.findOne({
    where: {
      [Op.and]: {
        id: idUser,
        activeKey: activeKey
      }
    }
  })
  if (!userActive)
    throw new ApiError(StatusCodes.BAD_REQUEST, "The active key is incorrect or the user does not exist");
  if (userActive.active)
    throw new ApiError(StatusCodes.BAD_REQUEST, "The user has been activated")
  await userRepository.repository.update<User>({ active: true }, {
    where: {
      id: idUser
    }
  })
}
export default activeUser;