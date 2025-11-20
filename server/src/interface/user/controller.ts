import { Request, Response } from "express";
import { asyncHandler } from "../../infraestructure/middlewares/asyncHandler";

export const UserController = {
  store: asyncHandler(async (req: Request, res: Response) => {}),
  list: asyncHandler(async (req: Request, res: Response) => {}),
  listById: asyncHandler(async (req: Request, res: Response) => {}),
  destroy: asyncHandler(async (req: Request, res: Response) => {}),
  update: asyncHandler(async (req: Request, res: Response) => {}),
};
