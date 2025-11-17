import { NextResponse } from "next/server";
import prisma from "../../../../lib/prisma";
import { parseDateISO, rangeWhere } from "../../../../lib/utils";

// helper seguro
async function safe<T>(fn: () => Promise<T>, fallback: T): Promise<T> {
  try { return await fn(); } catch { return fallback; }
}

export async function GET(req: Request) {
  try {
    const url = new URL(req.url);
    const from = parseDateISO(url.searchParams.get("from") || undefined);
    const to   = parseDateISO(url.searchParams.get("to") || undefined);
    const q    = url.searchParams.get("q")?.trim() || undefined;

    const negociosGerados = await safe(() =>
      prisma.negocio.count({
        where: {
          ...rangeWhere("data_criacao", from, to),
          ...(q ? { nome: { contains: q, mode: "insensitive" } } : {}),
        },
      }),
      0
    );

    const bcc = await safe(() =>
      prisma.cursos.findFirst({
        where: { nome: "BCC" },
        include: { Disciplinas_Cursos: { include: { disciplina: true } } },
      }),
      null as any
    );

    const disciplinasInovacao = bcc?.Disciplinas_Cursos?.length ?? 0;
    const alunosParticipantes = (bcc?.Disciplinas_Cursos ?? [])
      .reduce((s: number, dc: any) => s + Number(dc?.disciplina?.alunos_matriculados?.length ?? 0), 0);

    // Sem modelo Edital/PI no schema → retorna 0 (ajuste depois se necessário)
    const pisCriadas = 0;

    const eventosInovacao = await safe(() =>
      prisma.evento.count({
        where: {
          ...rangeWhere("data_inicio", from, to),
          ...(q ? { nome: { contains: q, mode: "insensitive" } } : {}),
        },
      }),
      0
    );

    const receitaAgg = await safe(() =>
      prisma.evento.aggregate({
        _sum: { receita: true },
        where: {
          ...rangeWhere("data_inicio", from, to),
          ...(q ? { nome: { contains: q, mode: "insensitive" } } : {}),
        },
      }),
      { _sum: { receita: 0 } }
    );
    const fomentoCaptado = Number((receitaAgg as any)?._sum?.receita ?? 0);

    return NextResponse.json({
      negociosGerados,
      disciplinasInovacao,
      pisCriadas,
      fomentoCaptado,
      eventosInovacao,
      alunosParticipantes,
    });
  } catch (e) {
    console.error("metrics error:", e);
    return NextResponse.json({ error: "internal_error" }, { status: 500 });
  }
}