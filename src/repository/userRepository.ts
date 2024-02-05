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

export default {
  repository,
  checkExistsUser
}
