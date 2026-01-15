import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET() {
  try {
    const safe = async <T,>(label: string, fn: () => Promise<T>, fallback: T): Promise<T> => {
      try {
        return await fn();
      } catch (error) {
        console.error(`Erro ao buscar ${label}:`, error);
        return fallback;
      }
    };

    const [negocios, disciplinas, eventos, motores, cursosRaw, relacoesRaw] = await Promise.all([
      safe("negocios", () => prisma.negocio.findMany({
        select: {
          nome: true,
          area_atuacao: true,
          faturamento_anual: true,
          fundadores: true,
          porte: true,
          data_criacao: true,
        },
      }), []),
      safe("disciplinas", () => prisma.disciplina.findMany({
        select: {
          nome: true,
          coordenador: true,
          semestre: true,
          codigo: true,
          alunos_matriculados: true,
          alunos_aprovados: true,
        },
      }), []),
      safe("eventos", () => prisma.evento.findMany({
        select: {
          nome: true,
          data_inicio: true,
          duracao: true,
          custo: true,
          receita: true,
          qtd_publico: true,
        },
      }), []),
      safe("motores", () => prisma.motor.findMany({
        select: {
          nome: true,
          motor_tipo: true,
          qtd_empresas_atendidas: true,
          faturamento: true,
          projetos: true,
          data_criacao: true,
        },
      }), []),
      safe("cursos", () => prisma.cursos.findMany({
        select: {
          id: true,
          nome: true,
          competicoes: true,
          fomento: true,
          capital_captado: true,
          Disciplinas_Cursos: {
            select: {
              disciplina: {
                select: {
                  nome: true,
                  semestre: true,
                },
              },
            },
          },
        },
      }), []),
      safe("relacoes_dimensoes", () => prisma.dimensao_Dimensao.findMany({
        include: {
          dimensaoA: {
            include: {
              Disciplina: { select: { nome: true } },
              Evento: { select: { nome: true } },
              Motor: { select: { nome: true } },
              Negocio: { select: { nome: true } },
            },
          },
          dimensaoB: {
            include: {
              Disciplina: { select: { nome: true } },
              Evento: { select: { nome: true } },
              Motor: { select: { nome: true } },
              Negocio: { select: { nome: true } },
            },
          },
        },
      }), []),
    ]);

    const cursos = cursosRaw.map((curso) => ({
      id: curso.id,
      nome: curso.nome,
      competicoes: curso.competicoes,
      fomento: curso.fomento,
      capital_captado: curso.capital_captado,
      disciplinas: curso.Disciplinas_Cursos.map((relacao) => relacao.disciplina),
    }));

    const formatDimensao = (dimensao: any) => ({
      id: dimensao.id,
      tipo: dimensao.tipo,
      nome: dimensao.Disciplina?.nome
        ?? dimensao.Evento?.nome
        ?? dimensao.Motor?.nome
        ?? dimensao.Negocio?.nome
        ?? null,
    });

    const relacoes_dimensoes = relacoesRaw.map((relacao) => ({
      a: formatDimensao(relacao.dimensaoA),
      b: formatDimensao(relacao.dimensaoB),
    }));

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
          relacoes_dimensoes,
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Erro ao buscar dados:", error);
    return NextResponse.json({ message: "Erro ao buscar dados" }, { status: 500 });
  }
}
