import { Express } from "express"
import { errorHandler, notFoundHandler } from "../middleware/handleErrorMiddleware"
import userRouter from "./userRouter"
import fileRouter from "./fileRouter"
const router = (app: Express) => {
  app.use("/user", userRouter)
  app.use("/file", fileRouter)
  app.all("*", notFoundHandler);
  app.use(errorHandler);
}
export default router