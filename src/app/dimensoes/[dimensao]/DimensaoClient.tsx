'use client'
import { use, useState } from "react";
import { Modal, DimensaoTipo } from "@/src/components/Modal";
import { FaPlus } from "react-icons/fa6";
import CardDeck from "@/src/components/CardDeck";
import Card from "@/src/components/Card";

interface HeaderProps {
  dimensao: DimensaoTipo,
}

interface CardDeckProps {
  title: string,
  dimensao: DimensaoTipo,
  cards: any[]
}

export function DimensaoClientHeader({
  dimensao,
}: HeaderProps) {
  const [isModalOpen, setModalOpen] = useState(false);
  const [textContent, setTextContent] = useState("");

  return (
    <>
      <button onClick={() => { setModalOpen(true) }}>Adicionar <FaPlus /></button>
      {isModalOpen && (
        <Modal closeModal={() => setModalOpen(false)} modalType={dimensao} modalData={{}} value={textContent} onChange={setTextContent} />
      )}
    </>
  )
}

export function DimesaoClientCardDeck({
  title,
  dimensao,
  cards,
}: CardDeckProps) {
  const [isModalOpen, setModalOpen] = useState(false);
  const [textContent, setTextContent] = useState("");
  const [modalData, setModalData] = useState<any>(null);

  // Pega os dados do card selecionado
  const getCardData = async (id: number) => {
    const response = await fetch(`/api/dimensoes/${dimensao}/${id}`, {
      cache: "no-cache",
    });
    if (!response.ok) return console.log(`Erro ao obter dados de ${dimensao} id ${id}`);
    const result = await response.json();
    return setModalData(result.data);
  }

  return (
    <>
      <CardDeck title={title} >
        {cards?.map((card: any) => {
          return <Card title={card.nome} key={card.dimensaoId} onClick={async () => {
            await getCardData(card.dimensaoId);
            setModalOpen(true);
          }}/>
        })}
      </CardDeck>
      {isModalOpen && (
        <Modal closeModal={() => setModalOpen(false)} modalType={dimensao} modalData={modalData} value={textContent} onChange={setTextContent} />
      )}
    </>
  )
}