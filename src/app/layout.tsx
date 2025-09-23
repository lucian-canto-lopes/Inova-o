'use client'
import { useState } from "react";
import "../css/index.css";

import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import CardDeck from "../components/CardDeck";
import Card from "../components/Card";
import { Modal, modalObj } from "../components/Modal";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const handleIsCollapsed = () => {
    setIsCollapsed(!isCollapsed);
  }

  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleModalOpen = () =>  {
    setIsModalOpen(true);
  }
  const handleModalClose = () =>  {
    setIsModalOpen(false);
  }

  const [modalObjIndex, setModalObjIndex] = useState(-1);
  const handleModalObjIndex = (index: number) => {
    setModalObjIndex(index);
  }

  const recentes: modalObj[] = [
    {
      id: 0,
      tipo: "Disciplina",
      nome: 'Cálculo Númerico',
      coordenador: 'Helaine',
      semestre: '2025.2',
      codigo: 'SBCC0017',
      alunos_matriculados: [
        'Aluno 1', 'Aluno 2', 'Aluno 3', 'Aluno 4', 'Aluno 5', 'Aluno 6', 'Aluno 7', 'Aluno 8',
      ],
      alunos_aprovados: [
        'Aluno 1', 'Aluno 2', 'Aluno 3', 'Aluno 4', 'Aluno 5', 'Aluno 6', 'Aluno 7', 'Aluno 8',
      ]
    },
    {
      id: 1,
      tipo: "Evento",
      nome: "JINO",
      descricao: "DESCRICAO",
      data_inicio: "string",
      duracao: "string",
      custo: 0,
      receita: 0,
      publico_participante: ["Pessoa 1", "Pessoa 2"],
      qtd_publico: 2,
      equipe: ["Pessoa 3", "Pessoa 4"],
      coordenadores: ["Pessoa 5", "Pessoa 6"],
      parceiros: ["Parceiro 1", "Parceiro 2"]
    },
    {
      id: 2,
      tipo: 'Motor',
      nome: 'InTap',
      descricao: "string",
      projetos: ["Projeto 1", "Projeto 2"],
      motor_tipo: "string",
      data_criacao: "string",
      lideres: ["Lider 1", "Lider 2"],
      equipe: ["Participante 1", "Participante 2"],
      qtd_empresas_atendidas: 0,
      faturamento: 0
    },
    {
      id: 3,
      tipo: 'Negócio',
      nome: 'Negócio Generico',
      area_atuacao: "string",
      faturamento_anual: 0,
      ano_criacao: "string",
      fundadores: ["Fundador 1", "Fundador 2"],
      porte: "string"
    },
  ];
  const todos = ['Displina 2', 'Evento 2', 'Motor 2', 'Negócio 2', 'Displina 1', 'Evento 1', 'Motor 1', 'Negócio 1'];

  const [content, setContent] = useState("");

  return (
    <html lang="pt-br">
      <body>
        {isModalOpen && <Modal closeModal={handleModalClose} modalObj={recentes[modalObjIndex]} value={content} onChange={setContent} />}
        <NavBar toggleSideBar={handleIsCollapsed} />
        <main>
          <SideBar isCollapsed={isCollapsed} />
          <section className="workspace">
            <CardDeck title={"Recentes"}>
              {recentes.map(item => {
                return <Card title={item.nome} key={item.id} onClick={() => {
                  handleModalObjIndex(item.id);
                  handleModalOpen();
                }} />
              })}
            </CardDeck>
            <CardDeck title={"Todos"} hasFilter>
              {todos.map(item => {
                return <Card title={item} key={item} />
              })}
            </CardDeck>
          </section>
          {children}
        </main>
      </body>
    </html>
  );
}
