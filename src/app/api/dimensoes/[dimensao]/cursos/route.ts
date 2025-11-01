import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
import { toFloat, toArray } from "../route";

// Criando um curso
export async function POST (
  request: Request,
  { params }: { params: Promise<{ dimensao: string }> }
) {
  const { dimensao } = await params;
  if (dimensao != "disciplinas") return NextResponse.json({ msg: "Rota inválida para essa dimensão" });

  const body = await request.json();

  try {
    await prisma.cursos.create({
      data: {
        nome: body.nome,
        competicoes: toArray(body.competicoes),
        fomento: toFloat(body.fomento),
        capital_captado: toFloat(body.capital_captado)
      }
    });

    return NextResponse.json({ msg: "Curso criado com sucesso!" }, { status: 201 })
  } catch (err: any) {
    return NextResponse.json({ msg: "Falha ao criar o curso!", error: err.message }, { status: 500 });
  }
}

// Consultando Cursos já existentes
export async function GET (
  request: Request,
  { params }: { params: Promise<{ dimensao: string }> }
) {
  const { dimensao } = await params;
  if (dimensao != "disciplinas") return NextResponse.json({ msg: "Rota inválida para essa dimensão" });

  try {
    const data = await prisma.cursos.findMany({
      take: 8,
      select: { nome: true, id: true}
    });

    return NextResponse.json(data, { status: 200 });
  } catch (err: any) {
    return NextResponse.json({ msg: "Falha ao obter cursos!", error: err.message }, { status: 500 });
  }
}