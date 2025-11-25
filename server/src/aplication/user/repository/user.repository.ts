import { prismaBD } from "../../../infraestructure/configuration/bd.config";
import { UserCreateDto } from "../dto/create.dto";

export const UserRepository = {
  create: async (Props: UserCreateDto) => {
    return await prismaBD.user.create({
      data: Props,
    });
  },
  find: () => {},
  update: () => {},
  delete: () => {},
};
