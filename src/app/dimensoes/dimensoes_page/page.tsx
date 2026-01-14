"use client"
import { useEffect, useState } from "react";
import CardDeck from "../../../components/CardDeck";
import { Modal, DimensaoTipo } from "@/src/components/Modal";

async function getDimentions(limit: number, order: ("cres" | "decres" | "data")) {
  const res = await fetch(`/api/dimensoes?limit=${limit}&order=${order}`);
  if (!res.ok) {
    const text = await res.text();
    console.error("Erro ao pegar dimensões: " + text);
    return []
  }
  const data = await res.json();
  return data;
}

export default function DimensoesPage() {
  // Modal
  const [isModalOpen, setModalOpen] = useState<boolean>(false);
  const [modalData, setModalData] = useState<any>({});

  const openModal = (dimensao: any) => {
    setModalOpen(true);
    setModalData(dimensao);
  }

  const [recentes, setRecentes] = useState<any[]>([]);
  const [todos, setTodos] = useState<any[]>([]);

  useEffect(() => {
    try {
      getDimentions(4, "data").then(result => setRecentes(result));
      getDimentions(8, "cres").then(result => setTodos(result));
    } catch (error) {
      console.error(error);
    }
  }, []);

  return (
    <>
      <CardDeck title={"Recentes"} data={recentes} onCardClick={openModal} />
      <CardDeck title={"Todos"} hasFilter data={todos} onCardClick={openModal} />
      {isModalOpen && (
        <Modal modalData={modalData?.data || {}} modalContent={modalData?.conteudo || ""} modalType={modalData?.tipo || "disciplinas"} closeModal={() => setModalOpen(false)} />
      )}
    </>
  );
}