import Link from "next/link";
import { notFound } from "next/navigation";
import { DimensaoClientHeader, DimesaoClientCardDeck } from "./DimensaoClient";

enum DimensaoEnum {
  disciplinas = "Disciplinas",
  eventos = "Eventos",
  motores = "Motores",
  negocios = "Negócios"
}
type DimensaoTipo = keyof typeof DimensaoEnum;
const dimensoesTipos = Object.keys(DimensaoEnum) as DimensaoTipo[];

async function getDimensaoData(dimensao: DimensaoTipo) {
  const response = await fetch(`http://localhost:3000/api/dimensoes/${dimensao}`, {
    cache: "no-store",
  });
  if (!response.ok) {
    console.log("Erro ao buscar dimensões");
    return [];
  };
  const data = await response.json();
  return data
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
        <Link href={"/dimensoes"}>Dimensões</Link> → {DimensaoEnum[dimensao]}
      </span>
      <header>
        <div>{DimensaoEnum[dimensao]}</div>
        <DimensaoClientHeader dimensao={dimensao} />
      </header>
      <DimesaoClientCardDeck title="Recentes" data={data} dimensao={dimensao} />
    </>
  );
}