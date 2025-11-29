import { Request, Response } from "express";
import { asyncHandler } from "../../infraestructure/middlewares/asyncHandler";
import { listCategoryUseCase } from "../../aplication/category/use-case/list.usecase";

export const CategoryController = {
  store: asyncHandler(async (req: Request, res: Response) => {}),
  list: asyncHandler(async (req: Request, res: Response) => {
    const dataCategory = await listCategoryUseCase();
    res.success("Lista de categoria", dataCategory);
  }),
  update: asyncHandler(async (req: Request, res: Response) => {}),
  delete: asyncHandler(async (req: Request, res: Response) => {}),
};
