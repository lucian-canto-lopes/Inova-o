"use client";
import { useState } from "react";
import Link from "next/link";
import { FaBars, FaMagnifyingGlass } from "react-icons/fa6";
import { FaClipboard } from "react-icons/fa";
import "../../../css/NavBar.css";

export default function SuperUserPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const menuItems = [
    { title: "Editar\ndados", href: "/dimensoes/dimensoes_page", icon: <FaClipboard /> },
    { title: "Visualizar\ndados", href: "/dimensoes/visualizacao_superuser/ver_dados", icon: <FaClipboard /> },
    { title: "Relatórios", href: "/dimensoes/visualizacao_superuser/relatorios", icon: <FaClipboard /> },
  ];

  return (
    <div className="h-screen flex flex-col bg-[#E8E8E8]">
      {/* NavBar igual à de dimensões */}
      <div className="NavBar">
        <FaBars onClick={() => setSidebarOpen(!sidebarOpen)} />
        <div className="search-bar">
          <input type="text" name="search-bar" id="search-bar" placeholder="Procurar..." />
          <FaMagnifyingGlass />
        </div>
        <Link href="/login" className="user-profile-icon">
          <img src="/default-avatar-profile-icon.webp" alt="Ícone de Usuário" />
        </Link>
      </div>

      {/* Conteúdo principal */}
      <main className="flex-1 flex items-center justify-center">
        <div className="flex gap-8 justify-center">
          {menuItems.map((item) => (
            <Link key={item.title} href={item.href}>
              <div className="w-56 h-56 bg-[#5a8a2a] rounded-xl flex flex-col items-center justify-center gap-4 cursor-pointer hover:bg-[#4d7a22] hover:scale-110 transition-all duration-200">
                <div className="w-20 h-20 border-2 border-white/40 rounded-lg flex items-center justify-center text-white">
                  <FaClipboard size={40} />
                </div>
                <span className="text-white text-lg font-medium text-center leading-tight whitespace-pre-line">
                  {item.title}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
