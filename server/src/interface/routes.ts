import { Router } from "express";
import userRouter from "./user/_routes";
import { validateSchema } from "../infraestructure/middlewares/validateSchema";
import { ValidateCreateUser } from "./user/validators";

const routes: Router = Router();
routes.use("/user", validateSchema(ValidateCreateUser, "body"), userRouter);
export default routes;
