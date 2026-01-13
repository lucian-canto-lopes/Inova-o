'use client'
import { FaPlus } from "react-icons/fa6";
import SubModal from "@/src/components/SubModal";
import CardDeck from "@/src/components/CardDeck"
import { useState } from "react";

export function CursosClientSubModal() {
  const [isModalOpen, setModalOpen] = useState<boolean>(false);

  return (
    <>
      <button onClick={() => setModalOpen(true)}>Adicionar <FaPlus /></button>
      {isModalOpen && (
        <SubModal closeSubModal={() => setModalOpen(false)} dimensao="cursos" data={{}} />
      )}
    </>
  )
}

export function CursosClientCardDeck({
  title,
  data,
}: {
  title: string,
  data: any
}) {
  const [isModalOpen, setModalOpen] = useState<boolean>(false);
  const [modalData, setModalData] = useState<any>(null);

  const handleCardClick = (result: any) => {
    setModalOpen(true);
    setModalData(result);
  }

  return (
    <>
      <CardDeck title={title} data={data.map((item: any) => {
        return { id: item.id, tipo: "cursos", data: item }
      })} onCardClick={handleCardClick} />
      {isModalOpen && (
        <SubModal closeSubModal={() => setModalOpen(false)} dimensao="cursos" data={modalData}/>
      )}
    </>
  )
}