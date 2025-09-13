'use client'
import { useState } from "react";
import "../css/index.css";

import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import CardDeck from "../components/CardDeck";
import Card from "../components/Card";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const handleIsCollapsed = () => {
    setIsCollapsed(!isCollapsed);
  }

  const recentes = ['Displina 1', 'Evento 1', 'Motor 1', 'Negócio 1'];
  const todos = ['Displina 2', 'Evento 2', 'Motor 2', 'Negócio 2','Displina 1', 'Evento 1', 'Motor 1', 'Negócio 1']

  return (
    <html lang="pt-br">
      <body>
        <NavBar toggleSideBar={handleIsCollapsed} />
        <main>
          <SideBar isCollapsed={isCollapsed} />
          <section className="workspace">
            <CardDeck title={"Recentes"}>
              {recentes.map(item => {
                return <Card title={item} key={item} />
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
