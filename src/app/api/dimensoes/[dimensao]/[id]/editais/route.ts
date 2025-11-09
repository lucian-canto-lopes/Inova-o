import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ dimensao: string, id: string }> }
) {
  const { dimensao, id } = await params;
  if (dimensao != "disciplinas") return NextResponse.json({ msg: "A dimensão do ID não possuí o campo editais" }, { status: 400 });
  let parsedId: number;
  try {
    parsedId = parseInt(id);
  } catch {
    return NextResponse.json({ msg: "O id deve ser um número inteiro" }, { status: 400 });
  }

  const body = await request.json();
  const editais = body.editais;
  if (!editais) return NextResponse.json({ msg: "Editais não foi definido na request" }, { status: 400 });

  try {
    await prisma.disciplina.update({
      where: {
        dimensaoId: parsedId,
      },
      data: {
        editais: editais
      }
    });

    return NextResponse.json({ msg: `Sucesso ao atualizar a Disciplina ID: ${id}`}, { status: 200 });
  } catch (error) {
    return NextResponse.json({ msg: "Ocorreu um erro ao atualizar a Disciplina", error: error }, { status: 500 });
  }
}