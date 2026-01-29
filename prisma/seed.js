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
  
  // Criando Disciplinas
  try {
    await prisma.disciplina.create({
      data: {
        nome: "Disciplina Exemplo 1",
        coordenador: "Coordenador Exemplo 1",
        semestre: "2026.1",
        codigo: "DISC01",
        alunos_matriculados: 60,
        alunos_aprovados: 45,
        editais: [
          { "valor": "234,52", "titulo": "Edital Teste", "e_vitoriosas": "0", "total-equipes": "22", "captal-captado": "234,25" },
          { "valor": "1,23", "titulo": "Outro Edital", "e_vitoriosas": "123", "total-equipes": "123", "captal-captado": "1,23" }
        ],
        dimensao: {
          create: {
            tipo: "disciplinas",
            conteudo: "<p>Exemplo de Disciplina 1</p>",
          }
        }
      },
      include: { dimensao: true }
    });

    await prisma.disciplina.create({
      data: {
        nome: "Disciplina Exemplo 2",
        coordenador: "Coordenador Exemplo 2",
        semestre: "2026.1",
        codigo: "DISC02",
        alunos_matriculados: 30,
        alunos_aprovados: 20,
        editais: [
          { "valor": "234,52", "titulo": "Edital Teste", "e_vitoriosas": "0", "total-equipes": "22", "captal-captado": "234,25" },
          { "valor": "1,23", "titulo": "Outro Edital", "e_vitoriosas": "123", "total-equipes": "123", "captal-captado": "1,23" }
        ],
        dimensao: {
          create: {
            tipo: "disciplinas",
            conteudo: "<p>Exemplo de Disciplina 1</p>",
          }
        }
      },
      include: { dimensao: true }
    });

    console.log("Disciplinas Semeadas!");
  } catch (err) {
    console.error("Erro ao semear Disciplinas" + err);
  }

  // Criando Evento
  try {
    await prisma.evento.create({
      data: {
        nome: "Evento Exemplo",
        descricao: "Um evento teste",
        data_inicio: new Date(),
        duracao: "48h",
        custo: 2000.00,
        receita: 5000.00,
        publico_participante: ["Participante 1", "Participante 2"],
        qtd_publico: 150,
        equipe: ["Equipe 1", "Equipe 2"],
        coordenadores: ["Coordenador 1", "Coordenador 2"],
        parceiros: ["Parceiro X", "Parceiro Y"],
        dimensao: {
          create: {
            tipo: "eventos",
            conteudo: "<p>Exemplo de Evento 1</p>",
          }
        }
      },
      include: { dimensao: true }
    });

    console.log("Evento Semeado!");
  } catch (err) {
    console.error("Erro ao semear Evento" + err);
  }

  // Criando Motor
  try {
    await prisma.motor.create({
      data: {
        nome: "Motor Exemplo",
        descricao: "Um motor teste",
        projetos: [
          {
            "prazo": "2026-01-05", "status": "cancelado", "titulo": "Projeto teste", "duracao": "3 dias", "descricao": "descrição teste do projeto",
            "orcamento": "23,42", "data_criacao": "2026-01-09", "valor_gerado": "234,25"
          }
        ],
        motor_tipo: "Tipo do Motor",
        data_criacao: new Date(),
        lideres: ["Lider 1", "Lider 2"],
        equipe: ["Equipe do motor"],
        qtd_empresas_atendidas: 15,
        faturamento: 45234.02,
        dimensao: {
          create: {
            tipo: "motores",
            conteudo: "<p>Exemplo de motor 1</p>",
          }
        }
      },
      include: { dimensao: true }
    });

    console.log("Motor Semeado!");
  } catch (err) {
    console.error("Erro ao semear Motor" + err);
  }

  // Criando Negócio
  try {
    await prisma.negocio.create({
      data: {
        nome: "Negócio Exemplo",
        area_atuacao: "Area de atuação do negócio",
        faturamento_anual: 2345.67,
        data_criacao: new Date(),
        fundadores: ["Fundador 1", "Fundador 2"],
        porte: "Pequeno",
        dimensao: {
          create: {
            tipo: "negocios",
            conteudo: "<p>Exemplo de negocio 1</p>",
          }
        }
      },
      include: { dimensao: true }
    });

    console.log("Negocio Semeado!");
  } catch (err) {
    console.error("Erro ao semear Negocio" + err);
  }

  // Criando Curso
  try {
    await prisma.cursos.create({
      data: {
        nome: "Curso Exemplo",
        competicoes: 2,
        capital_captado: 543.21,
        fomento: [
          {"date":"2026-01-07","valor": "43,21" },
          {"date":"2026-01-08","valor": "543,21" }
        ]
      }
    });

    console.log("Curso Semeado!");
  } catch (err) {
    console.error("Erro ao semear Curso: " + err);
  }

  // Criando relação DIMENSAO <-> DIMENSAO
  try {
    await prisma.dimensao_Dimensao.createMany({
      data: [
        {
          dimensaoAId: 1,
          dimensaoBId: 3,
        },
        {
          dimensaoAId: 2,
          dimensaoBId: 4,
        },
        {
          dimensaoAId: 1,
          dimensaoBId: 2,
        }
      ]
    });

    console.log("Relações DIMENSAO <-> DIMENSAO semeadas!");
  } catch (err) {
    console.error("Erro ao semear relações DIMENSAO <-> DIMENSAO: " + err);
  }

  // Criando relação DISCIPLINA <-> CURSO
  try {
    await prisma.disciplinas_Cursos.createMany({
      data: [
        {
          disciplinaId: 1,
          cursosId: 1,
        },
        {
          disciplinaId: 2,
          cursosId: 1,
        },
      ]
    });

    console.log("Relações DISCIPLINA <-> CURSO semeadas!");
  } catch (err) {
    console.error("Erro ao semear relações DISCIPLINA <-> CURSO" + err);
  }
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

