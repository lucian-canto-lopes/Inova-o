import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

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

export async function DELETE (
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