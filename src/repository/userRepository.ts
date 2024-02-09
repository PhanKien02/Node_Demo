import { Op } from 'sequelize';
import User from "../models/user"
import sequelize from '../config/sequelize';
const repository = sequelize.getRepository(User);

const checkExistsUser = async (email: string, userName: string): Promise<User> => {
  return await repository.findOne({
    where: {
      [Op.or]: [
        { email: email },
        { userName: userName }
      ]
    }
  })
}
const login = async (emailOrUserName: string): Promise<User> => {
  return await repository.findOne({
    where: {
      [Op.and]: [
        {
          [Op.or]: [
            { email: emailOrUserName },
            { userName: emailOrUserName }
          ]
        }
      ]
    }
  })
}
export default {
  repository,
  checkExistsUser,
  login
}
