import z from "zod";
import { ValidateCreateUser } from "../../../interface/user/validators";

export type UserCreateDto = z.infer<typeof ValidateCreateUser>;
