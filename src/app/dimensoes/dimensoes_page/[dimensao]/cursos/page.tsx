import { notFound } from "next/navigation";
import Link from "next/link";
import { CursosClientCardDeck, CursosClientSubModal } from "./CursosClient";
import prisma from "@/lib/prisma";
import { unstable_noStore as noStore } from "next/cache";

async function getCursos() {
  noStore();
  return prisma.cursos.findMany({
    take: 8,
    select: { nome: true, id: true },
  });
}

export default async function CursosPage({
  params,
}: {
  params: Promise<{ dimensao: string }>;
}) {
  const { dimensao } = await params;
  if (dimensao != "disciplinas") return notFound();

  const data = await getCursos();

  return (
    <>
      <span>
        <Link href={"/dimensoes/dimensoes_page"}>Dimensões</Link> → <Link href={"/dimensoes/dimensoes_page/disciplinas"}>Disciplinas</Link> → Cursos
      </span>
      <header>
        <div>Cursos</div>
        <CursosClientSubModal />
      </header>
      <CursosClientCardDeck title="Recentes" data={data} />
    </>
  )
}
