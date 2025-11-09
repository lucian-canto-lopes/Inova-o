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
  console.log(data);
  return NextResponse.json(data, { status: 200 });
  } catch (err) {
    return NextResponse.json({ msg: "Erro ao buscar por curso", err }, { status: 500 });
  }
}