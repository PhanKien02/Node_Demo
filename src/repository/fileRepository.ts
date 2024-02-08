import sequelize from "../config/sequelize";
import File from "../models/file";

const repository = sequelize.getRepository(File);

export default {
  repository
}