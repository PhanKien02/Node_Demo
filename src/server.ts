import express from "express";
import morgan from "morgan";
import bodyParser from "body-parser";
import cors from 'cors';
import sequelize from "./config/sequelize";
import router from "./routers";
require('express-async-errors');
import path from 'path';
require('dotenv').config({ path: path.resolve(__dirname, '../.env') })
const app = express();
app.use(
  cors({
    origin: "*",
  })
);
app.use(morgan('dev'))
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use(bodyParser.text())
app.use(express.urlencoded({ extended: true }));

sequelize.sync().then(() => {
  console.log("connection database success");
}).catch((error) => {
  console.log("connection database failed: ", error);
})
// apiRouter(app)
router(app);

let port = process.env.PORT || 8081;
app.listen(port, () => {
  console.log(`Example app listening http://localhost:${port}/`);
});