import { Prisma } from "@prisma/client";
import { prismaBD } from "../../../infraestructure/configuration/bd.config";

export const categoryRepository = {
  list: async (name?: string) => {
    const where: Prisma.CategoryWhereInput = {
      ...(name && {
        name: {
          mode: "insensitive",
        },
      }),
    };
    return await prismaBD.category.findMany({
      where,
    });
  },
};
