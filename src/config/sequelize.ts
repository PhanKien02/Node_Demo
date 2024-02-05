import { Sequelize } from "sequelize-typescript"
import User from "../models/user"
import Post from "../models/post"
import dotenv from 'dotenv';
dotenv.config();

const sequelize = new Sequelize({
  dialect: "mysql",
  host: process.env.DB_HOST,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  logging: false,
  models: [User, Post],
  repositoryMode: true,
})

export default sequelize 