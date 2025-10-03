import { NextResponse } from "next/server";
import { PrismaClient } from "@/src/generated/prisma";

const prisma = new PrismaClient();

type dimensaoTipo = "disciplinas" | "eventos" | "motores" | "negocios";
interface Params {
  params: { dimensao: dimensaoTipo }
};

// Tem que fazer uma toFloat
function toFloat(value: any): number {
  if (!value) return 0.0;
  if (Number(value)) return value;
  value = value.replace(",", ".");
  return parseFloat(value);
}

function toArray(value: any): string[] {
  if (!value) return [];
  if (Array.isArray(value)) return value;
  return value
    .toString()
    .split(/\s*[;,]\s*/)
    .filter((s: string) => s.trim());
}

export async function GET(
  request: Request,
  { params }: Params
) {
  const { dimensao } = params;

  return NextResponse.json({ message: dimensao });
};

export async function POST(
  request: Request,
  { params }: Params
) {
  const { dimensao } = await params;
  const body = await request.json();

  switch (dimensao) {
    case "disciplinas":
      const disciplina = await prisma.disciplina.create({
        data: {
          nome: body.nome,
          coordenador: body.coordenador,
          semestre: body.semestre,
          codigo: body.codigo,
          alunos_matriculados: toArray(body.alunos_matriculados),
          alunos_aprovados: toArray(body.alunos_aprovados),
          dimensao: {
            create: {
              tipo: "disciplinas"
            }
          },
        },
        include: {
          dimensao: true
        }
      });
      
      if (!disciplina) return NextResponse.json({ message: "Não foi possível criar uma Disciplina" }, { status: 500 });

      return NextResponse.json({ message: "Sucesso em Disciplinas" }, { status: 201 });

    case "eventos":
      const evento = await prisma.evento.create({
        data: {
          nome: body.nome,
          descricao: body.descricao,
          data_inicio: new Date(body.data_inicio),
          duracao: body.duracao,
          custo: toFloat(body.custo), // tem que ser float
          receita: toFloat(body.receita), // tem que ser float
          publico_participante: toArray(body.publico_participante),
          qtd_publico: parseInt(body.qtd_publico),
          equipe: toArray(body.equipe),
          coordenadores: toArray(body.coordenadores),
          parceiros: toArray(body.parceiros),
          dimensao: {
            create: {
              tipo: "eventos"
            }
          }
        },
        include: {
          dimensao: true
        }
      })
    
    default:
      console.log(`Default Case: ${body}`);
      return NextResponse.json({ message: "Sucesso em Default" }, { status: 201 });
  };
};