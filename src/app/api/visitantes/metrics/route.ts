import { NextResponse } from "next/server";
import { prisma } from "@/src/lib/prisma";

// helper seguro
async function safe<T>(fn: () => Promise<T>, fallback: T): Promise<T> {
  try { return await fn(); } catch { return fallback; }
}

export async function GET() {
  // Negócios (ajuste nome do modelo se diferente)
  const negociosGerados = await safe(() => prisma.negocio.count(), 0);

  const disciplinasInovacao = await safe(() => prisma.disciplina.count(), 0);

  const editaisPublicados = await safe(() => prisma.edital.count(), 0);

  // Fomento captado – se não há campo fomento em evento, pode usar soma de receita
  const eventoAgg = await safe(() => prisma.evento.aggregate({
    _sum: { receita: true }
  }), { _sum: { receita: 0 } });
  const fomentoCaptado = Number(eventoAgg._sum.receita ?? 0);

  // Eventos BCC – se evento não liga a curso, usa count geral
  const eventosInovacao = await safe(() => prisma.evento.count(), 0);

  // Alunos participantes - soma de todos os alunos_matriculados em disciplinas
  const disciplinas = await safe(() => prisma.disciplina.findMany({
    select: { alunos_matriculados: true }
  }), []);
  const alunosParticipantes = disciplinas.reduce(
    (acc, d) => acc + (d.alunos_matriculados?.length ?? 0),
    0
  );

  return NextResponse.json({
    negociosGerados,
    disciplinasInovacao,
    editaisPublicados,
    fomentoCaptado,
    eventosInovacao,
    alunosParticipantes,
  });
}