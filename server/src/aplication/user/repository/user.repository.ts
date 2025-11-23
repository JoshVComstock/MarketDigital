import { prismaDB } from "../../../infraestructure/configuration/prisma.config";
import { UserCreateDto } from "../dto/create.dto";

export const UserRepository = {
  create: (Props: UserCreateDto) => {
    return prismaDB.user.create({
      data: Props,
    });
  },
  find: () => {},
  update: () => {},
  delete: () => {},
};
