import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // First, let's see what's in the database using raw SQL
  const cursos = await prisma.$queryRaw`SELECT id, nome, competicoes FROM "Cursos"`;
  console.log("Current cursos data:", cursos);

  // Fix the competicoes field - set to 0 or count the array length
  await prisma.$executeRaw`UPDATE "Cursos" SET competicoes = 0 WHERE competicoes IS NULL OR competicoes::text LIKE '[%'`;
  
  console.log("Fixed!");
  
  // Verify
  const fixed = await prisma.$queryRaw`SELECT id, nome, competicoes FROM "Cursos"`;
  console.log("Fixed cursos data:", fixed);
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
