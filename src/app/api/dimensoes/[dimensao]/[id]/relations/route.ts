import { PrismaClient } from "@/src/generated/prisma";
import { NextResponse } from "next/server";
import { dimensaoTipo } from "../../route";

const prisma = new PrismaClient();

export async function GET(
  request: Request,
  { params }: { params: Promise<{ dimensao: dimensaoTipo; id: string }> }
) {
  const { id } = await params;

  const relationsQ = await prisma.dimensao.findUnique({
    where: {
      id: parseInt(id),
    },
    include: {
      Dimensao_DimensaoA: {
        include: {
          dimensaoB: {
            include: { Disciplina: true, Evento: true, Motor: true, Negocio: true },
          },
        },
      },
      Dimensao_DimensaoB: {
        include: {
          dimensaoA: {
            include: { Disciplina: true, Evento: true, Motor: true, Negocio: true },
          },
        },
      },
    },
  });

  if (!relationsQ) return NextResponse.json({ error: "Dimensão não encontrada" }, { status: 404 });

  const relations = [
    ...relationsQ.Dimensao_DimensaoA.map(r => r.dimensaoB),
    ...relationsQ.Dimensao_DimensaoB.map(r => r.dimensaoA),
  ].map(r => ({
    id: r.id,
    nome: r.Disciplina?.nome || r.Evento?.nome || r.Motor?.nome || r.Negocio?.nome, 
  }));

  const available = await prisma.dimensao.findMany({
    where: {
      id: {
        notIn: [parseInt(id)],
      },
    },
    select: {
      id: true,
      tipo: true,
      Disciplina: { select: { nome: true } },
      Evento: { select: { nome: true } },
      Motor: { select: { nome: true } },
      Negocio: { select: { nome: true } },
    }
  }).then(a => a.map(r => ({
    id: r.id,
    tipo: r.tipo,
    nome: r.Disciplina?.nome || r.Evento?.nome || r.Motor?.nome || r.Negocio?.nome,
  })));

  return NextResponse.json({ relations, available }, { status: 200 });
}

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ dimensao: dimensaoTipo; id: string }>},
) {
  try {
    const { id } = await params;
    const idInt = parseInt(id);
    const body = await request.json();
    const { relations }: { relations: number[] } = body;

    const uniqueRelations = [...new Set(relations)].filter(r => r !== idInt);

    await prisma.dimensao_Dimensao.deleteMany({
      where: {
        OR: [{ dimensaoAId: idInt }, { dimensaoBId: idInt }], 
      },
    });

    const createData = uniqueRelations.map(relId => {
      const a = Math.min(idInt, relId);
      const b = Math.max(idInt, relId);
      return { dimensaoAId: a, dimensaoBId: b };
    });

    await prisma.dimensao_Dimensao.createMany({
      data: createData,
      skipDuplicates: true,
    });

    return NextResponse.json({ message: "Relações atualizadas com sucesso", total: createData.length }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Erro ao atualizar relações" }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}