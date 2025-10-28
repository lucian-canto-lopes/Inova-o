import { notFound } from "next/navigation";
import Link from "next/link";
import { FaPlus } from "react-icons/fa6";
import CursosClient from "./CursosClient";

export default async function CursosPage({
  params,
}: {
  params: Promise<{ dimensao: string }>;
}) {
  const { dimensao } = await params;
  if (dimensao != "disciplinas") return notFound();

  const teste = (teste: any) => {
    console.log(teste)
  } 

  return (
    <>
      <span>
        <Link href={"/dimensoes"}>Dimensões</Link> → <Link href={"/dimensoes/disciplinas"}>Disciplinas</Link> → Cursos
      </span>
      <header>
        <div>Cursos</div>
        <button>Adicionar <FaPlus /></button>
      </header>
      <CursosClient title="Todos" data={[]} />
    </>
  )
}