"use client"
import { useEffect, useState } from "react";
import CardDeck from "../../components/CardDeck";
import Card from "../../components/Card";
import { Modal, DimensaoTipo } from "../../components/Modal";

async function getDimentions(limit: number, order: ("cres" | "decres" | "data")) {
  const res = await fetch(`/api/dimensoes?limit=${limit}&order=${order}`);
  if (!res.ok) {
    const text = await res.text();
    return console.error("Erro ao pegar dimensões: " + text);
  }
  const data = await res.json();
  console.log(data)
  return data;
}

export default function DimensoesPage() {
  // Modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleModalOpen = () => {
    setIsModalOpen(true);
  }
  const handleModalClose = () => {
    setIsModalOpen(false);
  }

  const [modalObjIndex, setModalObjIndex] = useState(-1);
  const handleModalObjIndex = (index: number) => {
    setModalObjIndex(index);
  }

  const [content, setContent] = useState("");

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
      {isModalOpen && <Modal closeModal={handleModalClose} modalType={recentes[modalObjIndex]?.tipo} modalData={recentes[modalObjIndex].data} modalContent={recentes[modalObjIndex].conteudo} />}
      <CardDeck title={"Recentes"}>
        {recentes.map((item: any, index) => {
          return <Card title={item.data.nome} key={`r-${item.id}`} onClick={() => {
            setModalObjIndex(index);
            handleModalOpen();
          }} />
        })}
      </CardDeck>
      <CardDeck title={"Todos"} hasFilter>
        {todos.map((item: any) => {
          return <Card title={item.data.nome} key={`t-${item.id}`} />
        })}
      </CardDeck>
    </>
  );
}