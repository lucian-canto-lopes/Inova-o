'use client'
import { useState } from "react";
import "../../css/index.css";

import NavBar from "../../components/NavBar";
import SideBar from "../../components/SideBar";
import SBGroup from "@/src/components/SBGroup";

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
    { title: "Dimensões", items: ["Disciplina", "Negócios", "Eventos", "Motores"] }
  ]

  return (
    <html lang="pt-br">
      <body>
        <NavBar toggleSideBar={handleIsSBCollapsed} />
        <main>
          <SideBar isCollapsed={isSBCollapsed}>
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
