import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

// Pega os cursos já relacionados com uma disciplina
export async function GET(
  request: Request,
  { params }: { params: Promise<{ dimensao: string, id: string }> }
) {
  const { dimensao, id } = await params;
  const parsedId = parseInt(id);
  if (dimensao != "disciplinas") return NextResponse.json({ msg: "Rota inválida para essa dimensão" }, { status: 400 });
  if (isNaN(parsedId)) return NextResponse.json({ msg: "ID inválido" }, { status: 400 });

  if (parsedId == -1) {
    const data = await prisma.cursos.findMany({
      select: { id: true, nome: true }
    });

    return NextResponse.json(data, { status: 200 });
  }
  else {
    try {
      const disciplina = await prisma.disciplina.findUnique({
        where: {
          dimensaoId: parsedId,
        },
        select: { Disciplinas_Cursos: { include: { cursos: true } } },
      });
      if (!disciplina) return NextResponse.json({ msg: "Disciplina não encontrada" }, { status: 404 });

      const related = disciplina.Disciplinas_Cursos.map(dc => ({
        id: dc.cursos.id,
        nome: dc.cursos.nome
      }));
      const relatedIds = related.map(c => c.id);

      const available = await prisma.cursos.findMany({
        where: {
          id: { notIn: relatedIds }
        },
        select: { id: true, nome: true}
      });

      const formattedRelations = [
        ...related.map(c => ({
          ...c,
          related: true,
        })),
        ...available.map(c => ({
          ...c,
          related: false,
        })),
      ];

      return NextResponse.json(formattedRelations, { status: 200 });
    } catch (err: any) {
      return NextResponse.json({ error: err.message }, { status: 500 });
    }
  }
}

// Cria/Atualiza relações entre uma disciplina e um curso
export async function PUT(
  request: Request,
  { params }: { params: Promise<{ dimensao: string, id: string }> },
) {
  const { dimensao, id } = await params;
  if (dimensao != "disciplinas") return NextResponse.json({ msg: "Rota inválida para essa dimensão" }, { status: 400 });
  const parsedId = parseInt(id);
  const body = await request.json();

  try {
    await prisma.disciplinas_Cursos.deleteMany({
      where: {
        disciplinaId: parsedId
      }
    });

    const createData = body.map((id: number) => ({ disciplinaId: parsedId, cursosId: id }));
    await prisma.disciplinas_Cursos.createMany({
      data: createData,
      skipDuplicates: true,
    });

    return NextResponse.json({ msg: "Cursos atualizados com sucesso", total: createData.length }, { status: 200 });

  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}