import cookieParser from "cookie-parser";
import cors from "cors";
import express, { Express } from "express";
import { configureCors } from "./infraestructure/configuration/cors";
export const createServer = (): Express => {
  const app = express();
  app.use(cookieParser());
  app.disable("x-powered-by");
  app.use(express.urlencoded({ extended: true }));
  app.use(cors(configureCors));
  return app;
};
