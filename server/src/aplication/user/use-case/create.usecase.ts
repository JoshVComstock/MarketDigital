import { UserCreateDto } from "../dto/create.dto";
import { UserRepository } from "../repository/user.repository";

export const CreateUserUseCase = (Props: UserCreateDto) => {
  const { name, userName, password, rol } = Props;
  const user = UserRepository.create({ name, userName, password, rol });
  return user;
};
