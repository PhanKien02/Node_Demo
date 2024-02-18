import sequelize from "../config/sequelize";
import Post from "../models/post";

const repository = sequelize.getRepository(Post);

export default {
  repository
}