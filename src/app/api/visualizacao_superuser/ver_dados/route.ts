import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET() {
  try {
    const [negocios, disciplinas, eventos, motores, cursos] = await Promise.all([
      prisma.negocio.findMany({
        select: {
          nome: true,
          area_atuacao: true,
          faturamento_anual: true,
          fundadores: true,
          porte: true,
        },
      }),
      prisma.disciplina.findMany({
        select: {
          nome: true,
          coordenador: true,
          semestre: true,
          codigo: true,
          alunos_matriculados: true,
          alunos_aprovados: true,
        },
      }),
      prisma.evento.findMany({
        select: {
          nome: true,
          data_inicio: true,
          duracao: true,
          receita: true,
          qtd_publico: true,
        },
      }),
      prisma.motor.findMany({
        select: {
          nome: true,
          motor_tipo: true,
          qtd_empresas_atendidas: true,
          faturamento: true,
        },
      }),
      prisma.cursos.findMany({
        select: {
          nome: true,
          fomento: true,
          capital_captado: true,
        },
      }),
    ]);

    const fomentoCaptado = cursos.reduce((acc, c) => acc + (c.fomento || 0), 0);
    const capitalCaptado = cursos.reduce((acc, c) => acc + (c.capital_captado || 0), 0);
    const alunosEnvolvidos = disciplinas.reduce((acc, d) => acc + (d.alunos_matriculados || 0), 0);
    const publicoEventos = eventos.reduce((acc, e) => acc + (e.qtd_publico || 0), 0);

    return NextResponse.json(
      {
        metrics: {
          negociosGerados: negocios.length,
          disciplinasInovacao: disciplinas.length,
          fomentoCaptado,
          eventosRealizados: eventos.length,
          alunosEnvolvidos,
          capitalCaptado,
          motores: motores.length,
          publicoEventos,
        },
        detalhes: {
          negocios,
          disciplinas,
          eventos,
          motores,
          cursos,
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Erro ao buscar dados:", error);
    return NextResponse.json({ message: "Erro ao buscar dados" }, { status: 500 });
  }
}
