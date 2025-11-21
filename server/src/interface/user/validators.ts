import z from "zod";
import { USER_ROL } from "../../domain/user/constants";

export const ValidateCreateUser = z.object({
  name: z.string().min(4).max(50),
  userName: z.string().min(4).max(50),
  password: z.string().min(6).max(30),
  rol: z.enum(USER_ROL),
});
