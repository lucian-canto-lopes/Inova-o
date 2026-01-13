import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const limit = searchParams.get('limit') ?? "0";
  const order = searchParams.get('order') ?? "date";

  const queue = await prisma.dimensao.findMany({
    take: parseInt(limit) > 0 ? parseInt(limit) : undefined,
    select: {
      id: true,
      tipo: true,
      Disciplina: { select: { dimensaoId: true, nome: true } },
      Evento: { select: { dimensaoId: true, nome: true } },
      Motor: { select: { dimensaoId: true, nome: true } },
      Negocio: { select: { dimensaoId: true, nome: true } }
    }
  });

  const response = queue.map(q => ({
    id: q.id,
    tipo: q.tipo,
    data: q.Disciplina || q.Evento || q.Motor || q.Negocio,
  })).filter(item => item.data !== null);

  const sortedResponse = response.sort((a, b) => {
    switch (order) {
      case "cres":
        return a.data?.nome.localeCompare(b.data?.nome ?? "") ?? 0;
      case "decres":
        return b.data?.nome.localeCompare(a.data?.nome ?? "") ?? 0;
      case "data":
      default:
        return b.id - a.id;
    }
  });

  return NextResponse.json(sortedResponse, { status: 200 });
}