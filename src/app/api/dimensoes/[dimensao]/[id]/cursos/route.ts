import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET (
  request: Request,
  { params }: { params: Promise<{ dimensao: string, id: string }> }
) {
  const { dimensao, id } = await params;
  if (dimensao != "disciplinas") return NextResponse.json({ msg: "Rota inválida para essa dimensão" });

  try {
    const data = await prisma.cursos.findUnique({
      where: {
        id: parseInt(id)
      }
    });

    console.log(data)

    return NextResponse.json(data, { status: 200 });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}