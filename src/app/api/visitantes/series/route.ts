import { NextResponse } from "next/server";
import { prisma } from "@/src/lib/prisma";

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
  try {
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

    // Dados mensais - agrupa eventos por mês
    const eventos = await prisma.evento.findMany({
      where: filtroRelacionado,
      select: {
        data_inicio: true,
        receita: true,
      },
      orderBy: { data_inicio: "asc" },
    });

    // Agrupa por mês/ano
    const monthlyMap = new Map<string, number>();
    for (const evento of eventos) {
      const date = new Date(evento.data_inicio);
      const key = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}`;
      monthlyMap.set(key, (monthlyMap.get(key) ?? 0) + 1);
    }

    const monthly = Array.from(monthlyMap.entries())
      .map(([month, valor]) => ({ month, valor }))
      .sort((a, b) => a.month.localeCompare(b.month));

    // Impactos por disciplina - conta alunos matriculados
    const disciplinas = await prisma.disciplina.findMany({
      where: filtroRelacionado,
      select: {
        nome: true,
        alunos_matriculados: true,
      },
      orderBy: { nome: "asc" },
    });

    const impactos = disciplinas.map((d) => ({
      nome: d.nome.length > 20 ? d.nome.substring(0, 20) + "..." : d.nome,
      alunos: d.alunos_matriculados?.length ?? 0,
    }));

    return NextResponse.json({ monthly, impactos });
  } catch (error) {
    console.error("Erro ao buscar series:", error);
    return NextResponse.json({ monthly: [], impactos: [] });
  }
}
