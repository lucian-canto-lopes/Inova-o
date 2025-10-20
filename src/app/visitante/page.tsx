"use client";
import { useState } from "react";
import Link from "next/link";

/* ===== NavBar (fixa e em largura total) ===== */
function LocalNavBar({
  onToggleSB,
  onSearchChange,
  searchValue,
}: {
  onToggleSB: () => void;
  onSearchChange: (v: string) => void;
  searchValue: string;
}) {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-14 bg-[#A3CE6F] flex items-center gap-4 px-4">
      <button
        type="button"
        onClick={onToggleSB}
        className="shrink-0 w-8 h-8 rounded-md flex items-center justify-center hover:bg-black/5 transition"
        aria-label="Alternar menu lateral"
        title="Alternar menu lateral"
      >
        <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
          <path d="M3 6h18v2H3V6zm0 5h18v2H3v-2zm0 5h18v2H3v-2z" />
        </svg>
      </button>

      <div className="flex-1 max-w-[900px] mx-auto">
        <div className="relative">
          <input
            id="search-bar"
            placeholder="Procurar..."
            value={searchValue}
            onChange={(e) => onSearchChange(e.target.value)}
            className={`w-full h-10 rounded-full pl-4 pr-10 outline-none border transition ${
              searchValue.trim()
                ? "bg-white text-black placeholder:text-zinc-400 border-black/10"
                : "bg-white/10 text-white placeholder:text-white/80 border-transparent"
            }`}
          />
          <div className="absolute right-3 top-1/2 -translate-y-1/2 text-[#2C5C10]">
            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor" aria-hidden>
              <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
            </svg>
          </div>
        </div>
      </div>

      <div className="shrink-0 w-8 h-8 rounded-full overflow-hidden bg-white/70 ring-1 ring-black/10">
        <img
          src="/default-avatar-profile-icon.webp"
          alt="Ícone de Usuário"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}

/* ===== SideBar (cola logo abaixo da navbar) ===== */
/* substituído: agora exibe filtros em vez do menu */
/* highlight controla a cor do título (branco/preto) */
function LocalSideBar({ collapsed }: { collapsed: boolean }) {
  return (
    <aside
      className="bg-[#4C7F16] text-white transition-[width,padding] duration-200 shrink-0 sticky top-14"
      style={{
        width: collapsed ? 0 : 300,
        padding: collapsed ? "0 0 0 0" : "24px",
        overflow: "hidden",
        height: "calc(100vh - 56px)",
      }}
    >
      <div className="flex flex-col h-full">
        {/* Mantém sempre branco — não altera com o input */}
        <h2 className="text-3xl font-extrabold mb-4 text-white">Filtros</h2>

        <form className="flex-1 flex flex-col justify-start">
          <div>
            <div className="grid grid-cols-2 gap-3 mb-3">
              <label className="sr-only" htmlFor="periodo1">Período</label>
              <div className="relative">
                <select
                  id="periodo1"
                  className="w-full rounded-xl px-4 pr-10 py-2.5 bg-white text-black text-sm leading-normal border border-transparent focus:ring-2 focus:ring-[#91BB63]/40 appearance-none"
                >
                  <option>Período</option>
                  <option>2024</option>
                  <option>2023</option>
                </select>
                <svg className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#2C5C10] pointer-events-none" viewBox="0 0 20 20" fill="none" aria-hidden>
                  <path d="M6 8l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>

              <label className="sr-only" htmlFor="periodo2">Período</label>
              <div className="relative">
                <select
                  id="periodo2"
                  className="w-full rounded-xl px-4 pr-10 py-2.5 bg-white text-black text-sm leading-normal border border-transparent focus:ring-2 focus:ring-[#91BB63]/40 appearance-none"
                >
                  <option>Período</option>
                  <option>Janeiro</option>
                  <option>Fevereiro</option>
                </select>
                <svg className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#2C5C10] pointer-events-none" viewBox="0 0 20 20" fill="none" aria-hidden>
                  <path d="M6 8l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>

            <div className="mb-3">
              <label className="sr-only" htmlFor="agente">Agente responsável</label>
              <div className="relative">
                <select
                  id="agente"
                  className="w-full rounded-xl px-4 pr-10 py-2.5 bg-white text-black text-sm leading-normal border border-transparent focus:ring-2 focus:ring-[#91BB63]/40 appearance-none"
                >
                  <option>Agente</option>
                  <option>Agente A</option>
                  <option>Agente B</option>
                </select>
                <svg className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#2C5C10] pointer-events-none" viewBox="0 0 20 20" fill="none" aria-hidden>
                  <path d="M6 8l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>

            <div className="mb-3">
              <label className="sr-only" htmlFor="visualizacao">Tipo de visualização</label>
              <div className="relative">
                <select
                  id="visualizacao"
                  className="w-full rounded-xl px-4 pr-10 py-2.5 bg-white text-black text-sm leading-normal border border-transparent focus:ring-2 focus:ring-[#91BB63]/40 appearance-none"
                >
                  <option>Visualização</option>
                  <option>Lista</option>
                  <option>Grade</option>
                </select>
                <svg className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#2C5C10] pointer-events-none" viewBox="0 0 20 20" fill="none" aria-hidden>
                  <path d="M6 8l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between mt-2">
            <button
              type="button"
              className="inline-flex items-center justify-center bg-[#2F6F10] hover:bg-[#2b6310] px-6 py-2 rounded-full text-white transition"
            >
              aplicar
            </button>

            <div className="text-center">
              <Link href="/visitante/quem_somos">
                <div className="w-12 h-12 border-2 border-white/20 rounded-md mb-2 overflow-hidden bg-white/10 flex items-center justify-center mx-auto cursor-pointer hover:bg-white/20 transition">
                  <img src="/file.svg" alt="Quem somos" className="w-7 h-7 object-contain" />
                </div>
              </Link>

               <div className="text-sm">Quem somos?</div>
             </div>
           </div>
        </form>
      </div>
    </aside>
  );
}

/* ===== Página ===== */
export default function VisitantePage() {
  const [collapsed, setCollapsed] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  return (
    <div className="min-h-screen bg-[#F7F7F7]">
      {/* Navbar fixa */}
      <LocalNavBar
        onToggleSB={() => setCollapsed((v) => !v)}
        onSearchChange={(v) => setSearchValue(v)}
        searchValue={searchValue}
      />
      <div className="h-14" />

      <main className="flex">
        {/* remova o highlight — LocalSideBar agora ignora mudança de cor */}
        <LocalSideBar collapsed={collapsed} />

        <section className="flex-1">
          <div className="mx-auto w-full max-w-[1280px] px-6 mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              <Card title="Negócios gerados por projetos de inovação na UFOPA:" value="20" />
              <Card title="Número de disciplinas de inovação em BCC:" value="500" />
              <Card title="PIs criadas na UFOPA no curso BCC:" value="10" />
              <Card title="Fomento captado por eventos de inovação:" value="R$ 50.000,00" />
              <Card title="Eventos de inovação realizados na UFOPA pelo curso BCC:" value="16" />
              <Card title="Alunos participantes das disciplinas de inovação BCC:" value="80" />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

/* ===== Card ===== */
function Card({ title, value }: { title: string; value: string | number }) {
  return (
    <div className="bg-white rounded-xl border border-zinc-200 shadow-sm p-4 flex flex-col justify-center text-center hover:shadow-md transition">
      <span className="text-sm text-zinc-700 mb-2 leading-snug">{title}</span>
      <strong className="text-lg text-zinc-900">{value}</strong>
    </div>
  );
}

function QuemSomos() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-extrabold mb-6">Quem Somos</h1>
      <p className="text-lg text-zinc-700 mb-4">
        Somos uma equipe dedicada à promoção da inovação e do empreendedorismo na UFOPA, conectando alunos, professores e a comunidade externa.
      </p>
      <p className="text-lg text-zinc-700 mb-6">
        Nosso objetivo é transformar ideias em negócios sustentáveis, por meio do incentivo à pesquisa aplicada e ao desenvolvimento de projetos inovadores.
      </p>

      <h2 className="text-2xl font-bold mb-4">Nossos Projetos</h2>
      <ul className="list-disc list-inside mb-6">
        <li className="mb-2">
          <strong>Embrapii:</strong> Projeto de inovação que visa desenvolver soluções tecnológicas para a indústria.
        </li>
        <li className="mb-2">
          <strong>InTap:</strong> Iniciativa que conecta pesquisadores a empresas em busca de inovação.
        </li>
        <li className="mb-2">
          <strong>ToyLab:</strong> Laboratório de protótipos e testes de produtos inovadores.
        </li>
        <li className="mb-2">
          <strong>LabCria:</strong> Espaço colaborativo para criação e desenvolvimento de projetos.
        </li>
        <li>
          <strong>PIAPE:</strong> Programa de Incubação de Arranjos Produtivos e Empreendimentos.
        </li>
      </ul>

      <h2 className="text-2xl font-bold mb-4">Nossa Equipe</h2>
      <p className="text-lg text-zinc-700 mb-4">
        Contamos com uma equipe multidisciplinar, composta por professores, pesquisadores e profissionais de diversas áreas, todos apaixonados por inovação e ensino.
      </p>
      <p className="text-lg text-zinc-700 mb-6">
        Juntos, trabalhamos para criar um ambiente estimulante e rico em oportunidades para o desenvolvimento de novas ideias e negócios.
      </p>

      <h2 className="text-2xl font-bold mb-4">Entre em Contato</h2>
      <p className="text-lg text-zinc-700 mb-4">
        Tem uma ideia ou projeto em mente? Quer saber mais sobre nossas iniciativas? Entre em contato conosco!
      </p>
      <p className="text-lg text-zinc-700">
        Email: <a href="mailto:contato@ufopa.br" className="text-[#2C5C10]">contato@ufopa.br</a>
      </p>
    </div>
  );
}
