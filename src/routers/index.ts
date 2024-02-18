import { Express } from "express"
import { errorHandler, notFoundHandler } from "../middleware/handleErrorMiddleware"
import userRouter from "./userRouter"
import fileRouter from "./fileRouter"
import postRouter from "./postRouter"
const router = (app: Express) => {
  app.use("/api/user", userRouter)
  app.use("/api/file", fileRouter)
  app.use("/api/post", postRouter)
  app.all("*", notFoundHandler);
  app.use(errorHandler);
}
export default router