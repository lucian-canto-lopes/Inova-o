'use client'
import { use, useState } from "react";
import { Modal, DimensaoTipo } from "@/src/components/Modal";
import { FaPlus } from "react-icons/fa6";
import CardDeck from "@/src/components/CardDeck";

interface HeaderProps {
  dimensao: DimensaoTipo,
}

interface CardDeckProps {
  title: string,
  dimensao: DimensaoTipo,
  data: any[],
}

export function DimensaoClientHeader({
  dimensao,
}: HeaderProps) {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <>
      <button onClick={() => { setModalOpen(true) }}>Adicionar <FaPlus /></button>
      {isModalOpen && (
        <Modal closeModal={() => setModalOpen(false)} modalType={dimensao} modalData={{}} modalContent={""} />
      )}
    </>
  )
}

export function DimesaoClientCardDeck({
  title,
  dimensao,
  data,
}: CardDeckProps) {
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState<any>(null);

  const openModal = (resultado: any) => {
    setModalData(resultado);
    setModalOpen(true);
  }

  return (
    <>
      <CardDeck title={title} data={data.map((item: any) => {
        return { id: item.dimensaoId, tipo: dimensao, data: item }
      })} onCardClick={openModal} />
      {isModalOpen && (
        <Modal closeModal={() => setModalOpen(false)} modalType={dimensao} modalData={modalData.data} modalContent={modalData.conteudo} />
      )}
    </>
  )
}