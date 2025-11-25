import { Router } from "express";
import { UserController } from "./controller";

const userRouter = Router();
userRouter.get("/", UserController.list);
userRouter.post("/", UserController.store);
userRouter.put("/:id", UserController.update);
userRouter.delete("/:id", UserController.destroy);
export default userRouter;
