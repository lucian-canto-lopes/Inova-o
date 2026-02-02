import { PrismaClient } from "@/src/generated/prisma";
import { withAccelerate } from "@prisma/extension-accelerate";

const globalForPrisma = global as unknown as {
  prisma: PrismaClient
}

// Use Accelerate only if DATABASE_URL starts with prisma://
const useAccelerate = process.env.DATABASE_URL?.startsWith('prisma://');

const prisma = globalForPrisma.prisma || (
  useAccelerate 
    ? new PrismaClient().$extends(withAccelerate())
    : new PrismaClient()
);

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

export default prisma;