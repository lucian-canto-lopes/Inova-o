import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
export async function GET(
  request: Request,
  { params }: { params: Promise<{ dimensao: string; id: string }> }
) {
  try {
    const { id } = await params;
    const parsedId = parseInt(id);

    if (parsedId == -1) {
      const rawData = await prisma.dimensao.findMany({
        select: { 
          id: true, 
          tipo: true, 
          Disciplina: { select: { nome: true } }, 
          Evento: { select: { nome: true } }, 
          Motor: { select: { nome: true } }, 
          Negocio: { select: { nome: true } } 
        }
      });

      const formatedData = rawData.map(d => ({
        id: d.id,
        tipo: d.tipo,
        nome: d.Disciplina?.nome || d.Evento?.nome || d.Motor?.nome || d.Negocio?.nome,
      }));

      return NextResponse.json(formatedData, { status: 200 });
    }
  else {
    const relationsQ = await prisma.dimensao.findUnique({
      where: {
        id: parsedId,
      },
      include: {
        Dimensao_DimensaoA: {
          include: {
            dimensaoB: {
              include: { 
                Disciplina: { select: { nome: true } }, 
                Evento: { select: { nome: true } }, 
                Motor: { select: { nome: true } }, 
                Negocio: { select: { nome: true } } 
              },
            },
          },
        },
        Dimensao_DimensaoB: {
          include: {
            dimensaoA: {
              include: { 
                Disciplina: { select: { nome: true } }, 
                Evento: { select: { nome: true } }, 
                Motor: { select: { nome: true } }, 
                Negocio: { select: { nome: true } } 
              },
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
      tipo: r.tipo,
      nome: r.Disciplina?.nome || r.Evento?.nome || r.Motor?.nome || r.Negocio?.nome,
    }));

    const relatedIds = new Set(relations.map(r => r.id));

    const available = await prisma.dimensao.findMany({
      where: {
        id: {
          notIn: [parsedId, ...relatedIds],
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

    const formatedRelations = [
      ...relations.map(r => ({
        ...r,
        related: true,
      })),
      ...available.map(r => ({
        ...r,
        related: false,
      }))
    ]

    return NextResponse.json(formatedRelations, { status: 200 });
  }
  } catch (error) {
    console.error("Erro em relations GET:", error);
    return NextResponse.json({ error: "Erro ao buscar relações" }, { status: 500 });
  }
}

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ dimensao: string; id: string }> },
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
