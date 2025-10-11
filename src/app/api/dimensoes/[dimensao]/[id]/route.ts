import { PrismaClient } from "@/src/generated/prisma";
import { dimensaoTipo } from "../route";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET(
  request: Request,
  { params }: { params: Promise<{ dimensao: dimensaoTipo, id: string }> }
) {
  const { id } = await params;

  const rawQ = await prisma.dimensao.findUnique({
    where: {
      id: parseInt(id),
    },
    include: {
      Disciplina: true,
      Evento: true,
      Motor: true,
      Negocio: true,
    }
  });

  if (!rawQ) return NextResponse.json({ message: `Dimensão não encontrada` }, { status: 404 });

  const formattedQ = {
    data: rawQ.Disciplina ?? rawQ.Evento ?? rawQ.Motor ?? rawQ.Negocio ?? null,
  };

  return NextResponse.json(formattedQ, { status: 200 });
}