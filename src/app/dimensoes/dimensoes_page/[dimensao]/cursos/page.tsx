import { notFound } from "next/navigation";
import Link from "next/link";
import { CursosClientCardDeck, CursosClientSubModal } from "./CursosClient";
import { getServerBaseUrl } from "@/src/lib/serverBaseUrl";

async function getCursos() {
  const baseUrl = getServerBaseUrl();
  const response = await fetch(`${baseUrl}/api/dimensoes/disciplinas/cursos`, {
    method: "GET",
    cache: "no-cache",
  });

  if (!response.ok) {
    const text = await response.text();
    console.error(`Error [${response.status}]: ${text}`);
    return [];
  }

  const data = await response.json();
  return data;
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
        <Link href={"/dimensoes"}>Dimensões</Link> → <Link href={"/dimensoes/disciplinas"}>Disciplinas</Link> → Cursos
      </span>
      <header>
        <div>Cursos</div>
        <CursosClientSubModal />
      </header>
      <CursosClientCardDeck title="Todos" data={data} />
    </>
  )
}
