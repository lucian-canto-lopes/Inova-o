import Link from "next/link";
import { notFound } from "next/navigation";
import { DimensaoClientHeader, DimesaoClientCardDeck } from "./DimensaoClient";
import prisma from "@/lib/prisma";
import { unstable_noStore as noStore } from "next/cache";

enum DimensaoEnum {
  disciplinas = "Disciplinas",
  eventos = "Eventos",
  motores = "Motores",
  negocios = "Negócios"
}
type DimensaoTipo = keyof typeof DimensaoEnum;
const dimensoesTipos = Object.keys(DimensaoEnum) as DimensaoTipo[];

async function getDimensaoData(dimensao: DimensaoTipo) {
  noStore();
  switch (dimensao) {
    case "disciplinas":
      return prisma.disciplina.findMany({ take: 8, select: { dimensaoId: true, nome: true } });
    case "eventos":
      return prisma.evento.findMany({ take: 8, select: { dimensaoId: true, nome: true } });
    case "motores":
      return prisma.motor.findMany({ take: 8, select: { dimensaoId: true, nome: true } });
    case "negocios":
      return prisma.negocio.findMany({ take: 8, select: { dimensaoId: true, nome: true } });
    default:
      return [];
  }
}

export default async function DimensaoPage({
  params,
}: {
  params: Promise<{ dimensao: DimensaoTipo }>;
}) {
  const { dimensao } = await params;
  if (!dimensoesTipos.includes(dimensao)) notFound();

  const data = await getDimensaoData(dimensao);

  return (
    <>
      <span>
        <Link href={"/dimensoes/dimensoes_page"}>Dimensões</Link> → {DimensaoEnum[dimensao]}
      </span>
      <header>
        <div>{DimensaoEnum[dimensao]}</div>
        <DimensaoClientHeader dimensao={dimensao} />
      </header>
      <DimesaoClientCardDeck title="Recentes" data={data} dimensao={dimensao} />
    </>
  );
}
