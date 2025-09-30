'use client'
import { Modal } from "@/src/components/Modal";
import Link from "next/link";
import { notFound } from "next/navigation";
import { use, useState } from "react";
import { FaPlus } from "react-icons/fa6";

enum DimensaoEnum {
  disciplinas = "Disciplinas",
  eventos = "Eventos",
  motores = "Motores",
  negocios = "Negócios"
}
type DimensaoTipo = keyof typeof DimensaoEnum;
const dimensoesTipos = Object.keys(DimensaoEnum) as DimensaoTipo[];

export default function DimensaoPage({
  params,
}: {
  params: Promise<{ dimensao: DimensaoTipo }>;
}) {
  const { dimensao } = use(params);
  if (!dimensoesTipos.includes(dimensao)) notFound();

  const [isModalOpen, setModalOpen] = useState(false);
  const handleModalOpen = () => {
    setModalOpen(!isModalOpen);
  };

  const [textContent, setTextContent] = useState("");

  const data = async () => {
    try {
      const response = await fetch(`/api/dimensoes/${dimensao}`);
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      return await response.json();
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  return (
    <>
      {isModalOpen && <Modal closeModal={() => { setModalOpen(false) }} modalType={dimensao} data={{}} value={textContent} onChange={setTextContent} ></Modal>}
      <span>
        <Link href={"/dimensoes"}>Dimensões</Link> → {DimensaoEnum[dimensao]}
      </span>
      <header>
        <div>{DimensaoEnum[dimensao]}</div>
        <button onClick={() => { setModalOpen(true) }}>Adicionar <FaPlus /></button>
      </header>
    </>
  );
}