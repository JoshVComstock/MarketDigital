import { categoryRepository } from "../repository/category.repository";

export const listCategoryUseCase = async () => {
  return await categoryRepository.list();
};
