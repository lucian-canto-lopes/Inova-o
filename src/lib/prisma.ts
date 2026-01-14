// Esse arquivo é redundante, vc já pode acessar um cliente do prima com: import prisma from "@/lib/prisma";
// Vou deletar esse arquivo da proxima vez, e pode deixar que eu arrumo as importações que estão usando esse arquivo

import rootPrisma from "../../lib/prisma";

const g = globalThis as unknown as { prisma?: PrismaClient };

const prisma =
  g.prisma ??
  new PrismaClient({
    log: process.env.NODE_ENV === "development" ? ["warn", "error"] : ["error"],
  });

if (process.env.NODE_ENV !== "production") g.prisma = prisma;

export default prisma;
export { prisma };