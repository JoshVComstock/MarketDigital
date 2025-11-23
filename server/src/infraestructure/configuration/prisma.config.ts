import PrismaClient from "../../../generated/prisma"; /// aca error en manejar primsa
export const prismaDB =
  global.prisma ||
  new PrismaClient({ log: ["query", "info", "warn", "error"] });
if (process.env.NODE_ENV !== "production") global.prisma = prismaDB;
