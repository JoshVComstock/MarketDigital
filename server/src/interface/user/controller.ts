import { Request, Response } from "express";
import { asyncHandler } from "../../infraestructure/middlewares/asyncHandler";
import { CreateUserUseCase } from "../../aplication/user/use-case/create.usecase";

export const UserController = {
  store: asyncHandler(async (req: Request, res: Response) => {
    const userStore = await CreateUserUseCase(req.body);
    return res.success("Usuario creado correctamente", userStore);
  }),
  list: asyncHandler(async (req: Request, res: Response) => {}),
  listById: asyncHandler(async (req: Request, res: Response) => {}),
  destroy: asyncHandler(async (req: Request, res: Response) => {}),
  update: asyncHandler(async (req: Request, res: Response) => {}),
};
