import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";
import { configureCors } from "./infraestructure/configuration/cors";
import {
  errorMiddleware,
  responseMiddleware,
} from "./infraestructure/middlewares/responseHandler";
import routes from "./interface/routes";
export const createServer = () => {
  const app = express();
  app.use(cookieParser());
  app.disable("x-powered-by");
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.use(cors(configureCors));
  app.use(responseMiddleware);
  app.use("/api/v1", routes);
  app.use(errorMiddleware);

  return app;
};
