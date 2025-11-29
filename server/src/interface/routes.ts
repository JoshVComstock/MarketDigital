import { Router } from "express";
import userRouter from "./user/_routes";
import { validateSchema } from "../infraestructure/middlewares/validateSchema";
import { ValidateCreateUser } from "./user/validators";
import categoryRouter from "./category/_routes";

const routes: Router = Router();
routes.use("/user", validateSchema(ValidateCreateUser, "body"), userRouter);
routes.use("/category", categoryRouter);

export default routes;
