'use client';

import { useState } from "react";
import Link from "next/link";

export default function PiapePage() {
  const [dimsOpen, setDimsOpen] = useState(true);

  return (
    <div className="min-h-screen bg-[#F7F7F7]">
      {/* Top bar */}
      <header className="fixed top-0 left-0 right-0 z-50 h-14 bg-[#A3CE6F] flex items-center px-4">
        <div className="flex-1 max-w-[900px] mx-auto w-full">
          <div className="relative">
            <input
              placeholder="Procurar..."
              className="w-full h-10 rounded-full pl-4 pr-10 outline-none border border-black/10 bg-white text-sm"
            />
            <div className="absolute right-3 top-1/2 -translate-y-1/2 text-[#2C5C10]">
              <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor" aria-hidden>
                <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
              </svg>
            </div>
          </div>
        </div>

        <Link href="/visitante/quem_somos" className="ml-4">
          <button
            aria-label="Voltar"
            className="w-9 h-9 flex items-center justify-center rounded-full border-2 border-black/10 bg-white/90 text-zinc-800 hover:bg-white transition"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        </Link>
      </header>

      {/* Left sidebar (fixed below top bar) */}
      <aside className="fixed top-14 left-0 h-[calc(100vh-56px)] w-44 bg-[#4C7F16] text-white p-4">
        <nav>
          <button
            type="button"
            onClick={() => setDimsOpen((v) => !v)}
            className="inline-flex items-center justify-between w-full gap-2 bg-[#355e0f] px-3 py-2 rounded-md shadow-sm text-white"
            aria-expanded={dimsOpen}
            aria-controls="dimensoes-list"
          >
            <span className="font-semibold">Dimensões</span>
            <svg className={`w-4 h-4 transition-transform ${dimsOpen ? "rotate-180" : ""}`} viewBox="0 0 20 20" fill="currentColor" aria-hidden>
              <path d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z" />
            </svg>
          </button>

          {dimsOpen && (
            <ul id="dimensoes-list" className="mt-3 space-y-2">
              <li>
                <Link href="/visitante/quem_somos/apresentacao/embrapii" className="block px-2 py-1 rounded hover:bg-white/10">
                  Embrapii
                </Link>
              </li>
              <li>
                <Link href="/visitante/quem_somos/apresentacao/intap" className="block px-2 py-1 rounded hover:bg-white/10">
                  InTap
                </Link>
              </li>
              <li>
                <Link href="/visitante/quem_somos/apresentacao/toylab" className="block px-2 py-1 rounded hover:bg-white/10">
                  ToyLab
                </Link>
              </li>
              <li>
                <Link href="/visitante/quem_somos/apresentacao/labcria" className="block px-2 py-1 rounded hover:bg-white/10">
                  LabCria
                </Link>
              </li>
              <li>
                <Link href="/visitante/quem_somos/apresentacao/piape" className="block px-2 py-1 rounded bg-white/10">
                  PIAPE
                </Link>
              </li>
            </ul>
          )}
        </nav>
      </aside>

      {/* Main content */}
      <main className="ml-44 mt-14 h-[calc(100vh-56px)] flex items-center justify-center">
        <div className="px-6 w-full text-center">
          <h1 className="text-4xl md:text-5xl font-medium text-zinc-900">PIAPE</h1>
          <p className="mt-4 text-zinc-700">Conteúdo da apresentação PIAPE.</p>
        </div>
      </main>
    </div>
  );
}