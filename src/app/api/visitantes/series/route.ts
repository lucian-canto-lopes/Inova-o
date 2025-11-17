import { NextResponse } from "next/server";
import prisma from "../../../../lib/prisma";
import { parseDateISO, rangeWhere } from "../../../../lib/utils";

async function safe<T>(fn: () => Promise<T>, fallback: T): Promise<T> {
  try { return await fn(); } catch { return fallback; }
}

export async function GET(req: Request) {
  try {
    const url = new URL(req.url);
    const from = parseDateISO(url.searchParams.get("from") || undefined);
    const to   = parseDateISO(url.searchParams.get("to") || undefined);
    const q    = url.searchParams.get("q")?.trim() || undefined;

    const start = from ?? new Date(new Date().getFullYear(), 0, 1);
    const end   = to   ?? new Date(new Date().getFullYear() + 1, 0, 1);

    const monthly: { month: string; valor: number }[] = [];
    const cursor = new Date(start);

    while (cursor < end) {
      const mStart = new Date(cursor.getFullYear(), cursor.getMonth(), 1);
      const mEnd   = new Date(cursor.getFullYear(), cursor.getMonth() + 1, 1);

      const cnt = await safe(() =>
        prisma.negocio.count({
          where: {
            ...rangeWhere("data_criacao", mStart, mEnd),
            ...(q ? { nome: { contains: q, mode: "insensitive" } } : {}),
          },
        }),
        0
      );

      monthly.push({
        month: mStart.toLocaleString("pt-BR", { month: "short" }),
        valor: cnt,
      });

      cursor.setMonth(cursor.getMonth() + 1);
    }

    const cursoBCC = await safe(() =>
      prisma.cursos.findFirst({
        where: { nome: "BCC" },
        include: { Disciplinas_Cursos: { include: { disciplina: true } } },
      }),
      null as any
    );

    const impactos = (cursoBCC?.Disciplinas_Cursos ?? []).map((dc: any) => ({
      nome: dc?.disciplina?.nome ?? "Disciplina",
      alunos: Number(dc?.disciplina?.alunos_matriculados?.length ?? 0),
    }));

    return NextResponse.json({ monthly, impactos });
  } catch (e) {
    console.error("series error:", e);
    return NextResponse.json({ error: "internal_error" }, { status: 500 });
  }
}