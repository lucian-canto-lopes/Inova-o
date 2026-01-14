import { NextResponse } from "next/server";
import { prisma } from "@/src/lib/prisma";
import { Prisma } from "@/src/generated/prisma";

// helper seguro
async function safe<T>(fn: () => Promise<T>, fallback: T): Promise<T> {
  try { return await fn(); } catch { return fallback; }
}

// Busca IDs de dimensões relacionadas a um motor
async function getDimensoesRelacionadas(motorId: number): Promise<number[]> {
  const relacoes = await prisma.dimensao_Dimensao.findMany({
    where: {
      OR: [
        { dimensaoAId: motorId },
        { dimensaoBId: motorId },
      ],
    },
    select: {
      dimensaoAId: true,
      dimensaoBId: true,
    },
  });

  const ids = new Set<number>();
  for (const r of relacoes) {
    if (r.dimensaoAId !== motorId) ids.add(r.dimensaoAId);
    if (r.dimensaoBId !== motorId) ids.add(r.dimensaoBId);
  }
  return Array.from(ids);
}

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const agentParam = searchParams.get("agent");
  const motorId = agentParam ? parseInt(agentParam, 10) : null;

  // Se um motor foi selecionado, busca dimensões relacionadas
  let dimensoesRelacionadas: number[] | null = null;
  if (motorId && !isNaN(motorId)) {
    dimensoesRelacionadas = await getDimensoesRelacionadas(motorId);
  }

  // Filtro base para entidades relacionadas ao motor
  const filtroRelacionado = dimensoesRelacionadas 
    ? { dimensaoId: { in: dimensoesRelacionadas } } 
    : {};

  // Negócios
  const negociosGerados = await safe(() => prisma.negocio.count({
    where: filtroRelacionado
  }), 0);

  // Disciplinas
  const disciplinasInovacao = await safe(() => prisma.disciplina.count({
    where: filtroRelacionado
  }), 0);

  // Editais publicados - conta disciplinas que têm editais preenchidos
  const editaisPublicados = await safe(() => prisma.disciplina.count({
    where: { 
      ...filtroRelacionado,
      NOT: { editais: { equals: Prisma.DbNull } } 
    }
  }), 0);

  // Receita de eventos
  const eventoAgg = await safe(() => prisma.evento.aggregate({
    where: filtroRelacionado,
    _sum: { receita: true }
  }), { _sum: { receita: 0 } });
  const fomentoCaptado = Number(eventoAgg._sum.receita ?? 0);

  // Eventos
  const eventosInovacao = await safe(() => prisma.evento.count({
    where: filtroRelacionado
  }), 0);

  // Alunos participantes - soma de todos os alunos_matriculados em disciplinas
  const disciplinas = await safe(() => prisma.disciplina.findMany({
    where: filtroRelacionado,
    select: { alunos_matriculados: true }
  }), []);
  const alunosParticipantes = disciplinas.reduce(
    (acc, d) => acc + (d.alunos_matriculados ?? 0),
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
