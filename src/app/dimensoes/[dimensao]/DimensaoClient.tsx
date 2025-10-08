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
        <Modal closeModal={() => setModalOpen(false)} modalType={dimensao} data={{}} value={textContent} onChange={setTextContent} />
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
  const [cardIndex, setCardIndex] = useState(-1);
  const [textContent, setTextContent] = useState("");

  return (
    <>
      <CardDeck title={title} >
        {cards.map((card: any, index) => {
          return <Card title={card.nome} key={card.dimensaoId} onClick={() => {
            setModalOpen(true);
            setCardIndex(index);
          }}/>
        })}
      </CardDeck>
      {isModalOpen && (
        <Modal closeModal={() => setModalOpen(false)} modalType={dimensao} data={cards[cardIndex]} value={textContent} onChange={setTextContent} />
      )}
    </>
  )
}