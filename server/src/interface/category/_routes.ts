import { Router } from "express";
import { CategoryController } from "./controller";

const categoryRouter = Router();

categoryRouter.get("/", CategoryController.list);
export default categoryRouter;
