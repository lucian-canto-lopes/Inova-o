"use client";
import { useState } from "react";
import Link from "next/link";
import { FaHouse } from "react-icons/fa6";
import "../../../css/index.css";

import NavBar from "../../../components/NavBar";
import SideBar from "../../../components/SideBar";
import SBGroup from "../../../components/SBGroup";

export default function DimensoesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // SideBar
  const [isSBCollapsed, setIsSBCollapsed] = useState(false);
  const handleIsSBCollapsed = () => {
    setIsSBCollapsed(!isSBCollapsed);
  }

  // SideBar Group
  const [sBGroupCollapsed, setSBGroupCollapsed] = useState<Record<number, boolean>>({});
  const toggleSBCollapsed = (i: number) => {
    setSBGroupCollapsed((prev) => ({ ...prev, [i]: !prev[i] }));
  }

  const sBGroups = [
    { title: "Dimensões", items: [{title: "Disciplinas", items: ["Cursos"]}, "Negócios", "Eventos", "Motores"] }
  ]

  return (
    <html lang="pt-br">
      <body>
        <NavBar toggleSideBar={handleIsSBCollapsed} />
        <main>
          <SideBar isCollapsed={isSBCollapsed}>
            <Link
              href="/dimensoes/visualizacao_superuser"
              className="SB-HomeLink"
              aria-label="Ir para visualizacao superuser"
              title="Visualizacao superuser"
            >
              <span className="SB-HomeIcon">
                <FaHouse />
              </span>
            </Link>
            {sBGroups.map((group, i) => {
              return <SBGroup key={group.title} title={group.title} items={group.items} isCollapsed={sBGroupCollapsed[i] ?? false} onClick={() => toggleSBCollapsed(i)} />
            })}
          </SideBar>
          <section className="workspace">
            {children}
          </section>
        </main>
      </body>
    </html>
  );
}
