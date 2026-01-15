"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Card from "@/src/components/Card";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

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

      <Link
        href="/login"  // troque se sua rota de login for diferente
        aria-label="Ir para login"
        title="Sair / Login"
        className="shrink-0 rounded-full focus:outline-none focus:ring-2 focus:ring-black/20"
      >
        <div className="w-8 h-8 rounded-full overflow-hidden bg-white/70 ring-1 ring-black/10 hover:ring-2 hover:ring-black/20 transition">
          <img
            src="/default-avatar-profile-icon.webp"
            alt="Ícone de Usuário"
            className="w-full h-full object-cover"
          />
        </div>
      </Link>
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
              <label className="sr-only" htmlFor="agente">Motor responsável</label>
              <div className="relative">
                <select
                  id="agente"
                  className="w-full rounded-xl px-4 pr-10 py-2.5 bg-white text-black text-sm leading-normal border border-transparent focus:ring-2 focus:ring-[#91BB63]/40 appearance-none"
                >
                  <option>Agente</option>
                  <option>Agente A</option>
                  <option>Agente B</option>
                </select>
                <svg className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#2C5C10]" viewBox="0 0 20 20" fill="none" aria-hidden>
                  <path d="M6 8l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>

            <div className="mb-3">
              <label className="sr-only" htmlFor="visualizacao">Visualização</label>
              <div className="relative">
                <select
                  id="visualizacao"
                  className="w-full rounded-xl px-4 pr-10 py-2.5 bg-white text-black text-sm leading-normal border border-transparent focus:ring-2 focus:ring-[#91BB63]/40 appearance-none"
                >
                  <option value="cards">Somente cards</option>
                  <option value="charts">Somente gráficos</option>
                  <option value="both">Cards e gráficos</option>
                </select>
                <svg className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#2C5C10]" viewBox="0 0 20 20" fill="none" aria-hidden>
                  <path d="M6 8l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between mt-2">
            <button
              type="submit"
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
type Metrics = {
  negociosGerados: number;
  disciplinasInovacao: number;
  editaisPublicados: number;
  fomentoCaptado: number;
  eventosInovacao: number;
  alunosParticipantes: number;
};

type SeriesPayload = {
  monthly: { month: string; valor: number }[];
  impactos: { nome: string; alunos: number }[];
};

function BRL(v: unknown) {
  const n = typeof v === "number" ? v : Number(v);
  if (!isFinite(n)) return "—";
  return n.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

export default function VisitantePage() {
  const [collapsed, setCollapsed] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const [metrics, setMetrics] = useState<Metrics | null>(null);
  const [series, setSeries] = useState<SeriesPayload | null>(null);

  useEffect(() => {
    fetch("/api/visitantes/metrics")
      .then(r => r.ok ? r.json() : Promise.reject(r))
      .then(setMetrics)
      .catch(() => setMetrics({
        negociosGerados: 0,
        disciplinasInovacao: 0,
        editaisPublicados: 0,
        fomentoCaptado: 0,
        eventosInovacao: 0,
        alunosParticipantes: 0,
      }));

    fetch("/api/visitantes/series")
      .then(r => r.ok ? r.json() : Promise.reject(r))
      .then(setSeries)
      .catch(() => setSeries({ monthly: [], impactos: [] }));
  }, []);

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
              <Card
                title="Negócios de inovação gerados (UFOPA)"
                value={metrics?.negociosGerados ?? "—"}
              />
              <Card
                title="Disciplinas de inovação do curso BCC"
                value={metrics?.disciplinasInovacao ?? "—"}
              />
              <Card
                title="Editais publicados (inovação)"
                value={metrics?.editaisPublicados ?? "—"}
              />
              <Card
                title="Receita total de eventos de inovação"
                value={metrics ? BRL(metrics.fomentoCaptado) : "—"}
              />
              <Card
                title="Eventos de inovação cadastrados"
                value={metrics?.eventosInovacao ?? "—"}
              />
              <Card
                title="Alunos nas disciplinas de inovação (BCC)"
                value={metrics?.alunosParticipantes ?? "—"}
              />
            </div>
          </div>

          {/* === GRÁFICOS (como no layout original) === */}
          <div className="bg-white rounded-2xl p-6 shadow-md mb-6">
            <h3 className="text-sm font-semibold text-zinc-700 mb-3">Evolução da inovação na UFOPA</h3>
            <MonthlyChart data={series?.monthly ?? []} />
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-md">
            <h3 className="text-sm font-semibold text-zinc-700 mb-3">Impactos gerados por disciplinas</h3>
            <ImpactChart data={series?.impactos ?? []} />
          </div>

          {/* Removidos: blocos “Resumo”, “Gráficos Mensais” (com prop series),
              “Impactos ao longo do tempo” (com prop series) e a “Tabela de Detalhes” */}
        </section>
      </main>
    </div>
  );
}

function MonthlyChart({ data }: { data: { month: string; valor: number }[] }) {
  return (
    <div className="w-full min-w-0">
      <ResponsiveContainer width="100%" height={320}>
        <LineChart data={data}>
          <CartesianGrid stroke="#ECECEC" strokeDasharray="4 4" />
          <XAxis dataKey="month" />
          <YAxis allowDecimals={false} />
          <Tooltip />
          <Line type="monotone" dataKey="valor" stroke="#4C7F16" strokeWidth={2} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

function ImpactChart({ data }: { data: { nome: string; alunos: number }[] }) {
  return (
    <div className="w-full min-w-0">
      <ResponsiveContainer width="100%" height={320}>
        <LineChart data={data}>
          <CartesianGrid stroke="#ECECEC" strokeDasharray="4 4" />
          <XAxis dataKey="nome" tick={{ fontSize: 11 }} />
          <YAxis allowDecimals={false} />
          <Tooltip />
          <Line type="monotone" dataKey="alunos" stroke="#5C7AEA" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
