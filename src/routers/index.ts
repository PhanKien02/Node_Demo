import { Express } from "express"
import { errorHandler, notFoundHandler } from "../middleware/handleErrorMiddleware"
import userRouter from "./userRouter"
const router = (app: Express) => {
  app.use("/user", userRouter)
  app.all("*", notFoundHandler);
  app.use(errorHandler);
}
export default router