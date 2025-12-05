import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ dimensao: string, id: string }> },
) {
  const { dimensao, id } = await params;
  if (dimensao != "motores") return NextResponse.json({ msg: "Somente a dimensão Motores possuí rota para projetos" }, { status: 400 });
  let parsedId: number;
  try {
    parsedId = parseInt(id);
  } catch (err) {
    return NextResponse.json({ msg: "O ID deve ser um número inteiro", erro: err }, { status: 400 });
  }

  const body = await request.json();
  const projetos = body.projetos;
  if (!projetos) return NextResponse.json({ msg: "Projetos não foram definidos na request" }, { status: 400 });

  try {
    await prisma.motor.update({
      where: {
        dimensaoId: parsedId,
      },
      data: {
        projetos: projetos,
      }
    })
    return NextResponse.json({ msg: "Sucesso ao atualizar o Motor" }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ msg: "Ocorreu um erro ao atulizar o Motor", error: err }, { status: 500 });
  }
}