const { PrismaClient } = require("../src/generated/prisma");
const bcrypt = require("bcrypt");

const prisma = new PrismaClient();

async function main() {
  const hash = await bcrypt.hash("1234", 10);

  await prisma.usuario.upsert({
    where: { nome_usuario: "PIAPE" },
    update: {
      senha: hash,
      email_institucional: "piape@exemplo.com",
      tipo_de_usuario: "ADMIN"
    },
    create: {
      nome_usuario: "PIAPE",
      senha: hash,
      email_institucional: "piape@exemplo.com",
      tipo_de_usuario: "ADMIN",
      telefone: null
    }
  });

  console.log("Seed OK: usuário PIAPE.");
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });