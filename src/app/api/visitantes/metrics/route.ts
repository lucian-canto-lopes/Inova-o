import { NextResponse } from "next/server";
import { prisma } from "@/src/lib/prisma";

// helper seguro
async function safe<T>(fn: () => Promise<T>, fallback: T): Promise<T> {
  try { return await fn(); } catch { return fallback; }
}

export async function GET() {
  // Negócios (ajuste nome do modelo se diferente)
  const negociosGerados = await safe(() => prisma.negocio.count(), 0);

  // Curso BCC com disciplinas
  const bcc = await safe(() => prisma.cursos.findUnique({
    where: { nome: "BCC" },
    include: { Disciplinas_Cursos: { include: { disciplina: true } } }
  }), null as any);

  const disciplinasInovacao = await safe(() => prisma.disciplina.count(), 0);

  const alunosParticipantes = (bcc?.Disciplinas_Cursos ?? [])
    .reduce((sum: number, dc: any) =>
      sum + Number(dc?.disciplina?.alunos_matriculados?.length ?? 0), 0);

  // PIs criadas – se não existe modelo PI, troque por edital.count()
  const pisCriadas = await safe(() => prisma.pi.count(), 0); // <= ajusta para seu modelo real
  // Se não tiver tabela pi: const pisCriadas = await safe(() => prisma.edital.count(), 0);

  // Fomento captado – se não há campo fomento em evento, pode usar soma de receita
  const eventoAgg = await safe(() => prisma.evento.aggregate({
    _sum: { receita: true }
  }), { _sum: { receita: 0 } });
  const fomentoCaptado = Number(eventoAgg._sum.receita ?? 0);

  // Eventos BCC – se evento não liga a curso, usa count geral
  const eventosInovacao = await safe(() => prisma.evento.count(), 0);

  return NextResponse.json({
    negociosGerados,
    disciplinasInovacao,
    pisCriadas,
    fomentoCaptado,
    eventosInovacao,
    alunosParticipantes,
  });
}