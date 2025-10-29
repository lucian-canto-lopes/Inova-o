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
        <SubModal closeSubModal={() => setModalOpen(false)} dimensao="cursos" setValue={(value) => (console.log(value))} />
      )}
    </>
  )
}

export function CursosClientCardDeck ({
  title,
  data,
}: {
  title: string,
  data: any
}) {
  const handleCardClick = (result: any) => {
    console.log(result)
  }

  return (
    <CardDeck title={title} data={data} onCardClick={handleCardClick} />
  )
}