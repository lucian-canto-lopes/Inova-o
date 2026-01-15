import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
import { toFloat } from "../../route";

const parseCompeticoes = (value: unknown): string[] => {
  if (!value) return [];
  if (Array.isArray(value)) {
    return value
      .map((item) => String(item).trim())
      .filter(Boolean);
  }
  if (typeof value === "string") {
    return value
      .split(/[,;|]/)
      .map((item) => item.trim())
      .filter(Boolean);
  }
  const text = String(value).trim();
  return text ? [text] : [];
};

export async function GET(
  request: Request,
  { params }: { params: Promise<{ dimensao: string, id: string }> }
) {
  const { dimensao, id } = await params;
  if (dimensao != "disciplinas") return NextResponse.json({ msg: "Rota inválida para essa dimensão" }, { status: 400 });
  let parsedId: number;
  try {
    parsedId = parseInt(id);
  } catch (err) {
    return NextResponse.json({ msg: "Não foi possível converter o Id para inteiro", err }, { status: 500 });
  }

  try {
    const data = await prisma.cursos.findUnique({
      where: { id: parsedId },
    });
    return NextResponse.json(data, { status: 200 });
  } catch (err) {
    return NextResponse.json({ msg: "Erro ao buscar por curso", err }, { status: 500 });
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ dimensao: string, id: string }> }
) {
  const { dimensao, id } = await params;
  if (dimensao != "disciplinas") return NextResponse.json({ msg: "Rota inválida para essa dimensão" }, { status: 400 });
  let parsedId: number;
  try {
    parsedId = parseInt(id);
  } catch (err) {
    return NextResponse.json({ msg: "Não foi possível converter o Id para inteiro", err }, { status: 500 });
  }

  try {
    await prisma.cursos.delete({
      where: { id: parsedId },
    });
    return NextResponse.json({ msg: `Sucesso ao deletar curso de ID ${id}` }, { status: 200 });
  } catch (err: any) {
    return NextResponse.json(err, { status: 500 });
  };
}

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ dimensao: string, id: string }> }
) {
  const { dimensao, id } = await params;
  if (dimensao != "disciplinas") return NextResponse.json({ msg: "Rota inválida para essa dimensão" }, { status: 400 });
  let parsedId: number;
  try {
    parsedId = parseInt(id);
  } catch (err) {
    return NextResponse.json({ msg: "Não foi possível converter o Id para inteiro", err }, { status: 500 });
  }

  const body = await request.json();
  console.log(body)

  try {
    await prisma.cursos.update({
      where: {
        id: parsedId
      },
      data: {
        nome: body.nome,
        competicoes: parseCompeticoes(body.competicoes),
        capital_captado: toFloat(body.capital_captado),
        fomento: toFloat(body.fomento)
      }
    })

    return NextResponse.json({ msg: `Sucesso ao atulizar curso de ID ${id}` }, { status: 200 });
  } catch (err: any) {
    return NextResponse.json(err, { status: 500 });
  }
}
