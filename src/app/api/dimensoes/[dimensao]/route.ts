import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export type dimensaoTipo = "disciplinas" | "eventos" | "motores" | "negocios";
interface Params {
  params: Promise<{ dimensao: string }>
};

export function toFloat(value: any): number {
  if (!value) return 0.0;
  if (Number(value)) return parseFloat(value);
  value = value.replace(",", ".");
  return parseFloat(value);
}

export function toArray(value: any): string[] {
  if (!value) return [];
  if (Array.isArray(value)) return value;
  return value
    .toString()
    .split(/\s*[;,]\s*/)
    .filter((s: string) => s.trim());
}

// Devolve os nomes e ids das 8 últimas disciplinas
export async function GET(
  request: Request,
  { params }: Params
) {
  const { dimensao } = await params;

  let data: any = {}

  switch (dimensao) {
    case "disciplinas":
      data = await prisma.disciplina.findMany({ take: 8, select: { dimensaoId: true, nome: true } });
      return NextResponse.json(data, { status: 200 });

    case "eventos":
      data = await prisma.evento.findMany({ take: 8, select: { dimensaoId: true, nome: true } });
      return NextResponse.json(data, { status: 200 });

    case "motores":
      data = await prisma.motor.findMany({ take: 8, select: { dimensaoId: true, nome: true } });
      return NextResponse.json(data, { status: 200 });

    case "negocios":
      data = await prisma.negocio.findMany({ take: 8, select: { dimensaoId: true, nome: true } });
      return NextResponse.json(data, { status: 200 });

    default:
      return NextResponse.json({ message: "Bad Request", data: {} }, { status: 400 });
  }
};

export async function POST(
  request: Request,
  { params }: Params
) {
  const { dimensao } = await params;
  const body = await request.json();

  switch (dimensao) {
    case "disciplinas":
      try {
        const disciplina = await prisma.disciplina.create({
          data: {
            nome: body.nome || "",
            coordenador: body.coordenador || "",
            semestre: body.semestre || "",
            codigo: body.codigo || "",
            alunos_matriculados: parseInt(body.alunos_matriculados) || 0,
            alunos_aprovados: parseInt(body.alunos_aprovados) || 0,
            dimensao: {
              create: {
                tipo: "disciplinas",
                conteudo: body.conteudo || ""
              }
            },
          },
          include: {
            dimensao: true
          }
        });

        if (!disciplina) return NextResponse.json({ message: "Não foi possível criar uma Disciplina" }, { status: 500 });
        return NextResponse.json({ message: "Sucesso em Disciplinas", id: disciplina.dimensaoId }, { status: 201 });
      } catch (error: any) {
        console.error("Erro ao criar disciplina:", error);
        return NextResponse.json({ message: "Erro ao criar disciplina", error: error.message }, { status: 500 });
      }

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
              tipo: "eventos",
              conteudo: body.conteudo
            }
          }
        },
        include: {
          dimensao: true
        }
      });

      if (!evento) return NextResponse.json({ message: "Não foi possível criar um Evento" }, { status: 500 });
      return NextResponse.json({ message: "Sucesso em criar Evento", id: evento.dimensaoId }, { status: 201 });

    case "motores":
      const motor = await prisma.motor.create({
        data: {
          nome: body.nome,
          data_criacao: new Date(body.data_criacao),
          descricao: body.descricao,
          faturamento: toFloat(body.faturamento),
          motor_tipo: body.motor_tipo,
          qtd_empresas_atendidas: parseInt(body.qtd_empresas_atendidas),
          equipe: toArray(body.equipe),
          lideres: toArray(body.lideres),
          projetos: body.projetos || [],
          dimensao: {
            create: {
              tipo: "motores",
              conteudo: body.conteudo,
            }
          }
        },
        include: {
          dimensao: true
        }
      });

      if (!motor) return NextResponse.json({ message: "Não foi possível criar um Motor" }, { status: 500 });
      return NextResponse.json({ message: "Sucesso em criar Motor", id: motor.dimensaoId }, { status: 201 });

    case "negocios":
      const negocio = await prisma.negocio.create({
        data: {
          nome: body.nome,
          area_atuacao: body.area_atuacao,
          faturamento_anual: toFloat(body.faturamento_anual),
          data_criacao: new Date(body.data_criacao),
          fundadores: toArray(body.fundadores),
          porte: body.porte,
          dimensao: {
            create: {
              tipo: "negocios",
              conteudo: body.conteudo,
            }
          }
        },
        include: {
          dimensao: true
        }
      });

      if (!negocio) return NextResponse.json({ message: "Não foi possível criar um Negócio" }, { status: 500 });
      return NextResponse.json({ message: "Sucesso ao criar Negócio ", id: negocio.dimensaoId }, { status: 201 });

    default:
      return NextResponse.json({ message: "Bad Request" }, { status: 400 });
  };
};

export async function DELETE(
  request: Request,
) {
  const body = await request.json();

  try {
    await prisma.dimensao.delete({
      where: {
        id: body.dimensaoId,
      },
    });
  } catch (error) {
    return NextResponse.json({ message: `Não foi possível deletar a dimensão de id ${body.dimensaoId}`, error: error }, { status: 500 });
  }

  return NextResponse.json({ message: `Sucesso ao deletar dimensão de id ${body.dimensaoId}` }, { status: 200 });
}
