import prisma from "@/lib/prisma";
import { dimensaoTipo } from "../route";
import { NextResponse } from "next/server";
import { toArray, toFloat } from "../route";

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
    conteudo: rawQ.conteudo,
    tipo: rawQ.tipo,
  };
  console.log(formattedQ)

  return NextResponse.json(formattedQ, { status: 200 });
}

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ dimensao: dimensaoTipo, id: string }> }
) {
  const { dimensao, id } = await params;
  const body = await request.json();

  await prisma.dimensao.update({
    where: {
      id: parseInt(id),
    },
    data: {
      conteudo: body.conteudo,
    }
  })

  switch (dimensao) {
    case "disciplinas":
      await prisma.disciplina.update({
        where: {
          dimensaoId: parseInt(id),
        },
        data: {
          nome: body.nome,
          coordenador: body.coordenador,
          semestre: body.semestre,
          codigo: body.codigo,
          alunos_matriculados: toArray(body.alunos_matriculados),
          alunos_aprovados: toArray(body.alunos_aprovados),
        },
      });

      return NextResponse.json({ message: "Sucesso ao atualizar Disciplina!" }, { status: 200 });

    case "eventos":
      await prisma.evento.update({
        where: {
          dimensaoId: parseInt(id),
        },
        data: {
          nome: body.nome,
          descricao: body.descricao,
          data_inicio: new Date(body.data_inicio),
          duracao: body.duracao,
          custo: toFloat(body.custo),
          receita: toFloat(body.receita),
          publico_participante: toArray(body.publico_participante),
          qtd_publico: parseInt(body.qtd_publico),
          equipe: toArray(body.equipe),
          coordenadores: toArray(body.coordenador),
          parceiros: toArray(body.parceiros),
        },
      });

      return NextResponse.json({ message: "Sucesso ao atualizar Evento!" }, { status: 200 });

    case "motores":
      await prisma.motor.update({
        where: {
          dimensaoId: parseInt(id),
        },
        data: {
          nome: body.nome,
          descricao: body.descricao,
          projetos: toArray(body.projetos),
          motor_tipo: body.motor_tipo,
          data_criacao: new Date(body.data_criacao),
          lideres: toArray(body.lideres),
          equipe: toArray(body.equipe),
          qtd_empresas_atendidas: parseInt(body.qtd_empresas_atendidas),
          faturamento: toFloat(body.faturamento),
        }
      });

      return NextResponse.json({ message: "Sucesso ao atualizar Motor!" }, { status: 200 });

    case "negocios":
      await prisma.negocio.update({
        where: {
          dimensaoId: parseInt(id),
        },
        data: {
          nome: body.nome,
          area_atuacao: body.area_atuacao,
          faturamento_anual: toFloat(body.faturamento_anual),
          data_criacao: new Date(body.data_criacao),
          fundadores: toArray(body.fundadores),
          porte: body.porte,
        }
      });

      return NextResponse.json({ message: "Sucesso ao atualizar Negócio!" }, { status: 200 });

    default:
      return NextResponse.json({ error: "Dimensão ínvalida" }, { status: 400 });
  }
}