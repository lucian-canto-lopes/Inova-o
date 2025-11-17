"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { MonthlyLineChart } from "@/src/components/MonthlyLineChart";
import { ImpactChart } from "@/src/components/ImpactChart";

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
function LocalSideBar({
  collapsed,
  filters,
  onChange,
  onApply,
}: {
  collapsed: boolean;
  filters: { from: string; to: string; agent: string; view: string } // <- mudou
  onChange: (k: keyof typeof filters, v: string) => void;
  onApply: () => void;
}) {
  return (
    <aside
      className="bg-[#4C7F16] text-white transition-[width,padding] duration-200 shrink-0 sticky top-14"
      style={{ width: collapsed ? 0 : 300, padding: collapsed ? "0 0 0 0" : "24px", overflow: "hidden", height: "calc(100vh - 56px)" }}
    >
      <div className="flex flex-col h-full">
        <h2 className="text-3xl font-extrabold mb-4 text-white">Filtros</h2>

        <form
          className="flex-1 flex flex-col justify-start"
          onSubmit={(e) => { e.preventDefault(); onApply(); }}
        >
          <div>
            <div className="grid grid-cols-2 gap-3 mb-3">
              <label className="sr-only" htmlFor="from">Início</label>
              <div className="relative">
                <input
                  id="from"
                  type="date"
                  value={filters.from}
                  onChange={(e) => onChange("from", e.target.value)}
                  className="w-full rounded-xl px-4 py-2.5 bg-white text-black text-sm leading-normal border border-transparent focus:ring-2 focus:ring-[#91BB63]/40"
                />
              </div>

              <label className="sr-only" htmlFor="to">Fim</label>
              <div className="relative">
                <input
                  id="to"
                  type="date"
                  value={filters.to}
                  onChange={(e) => onChange("to", e.target.value)}
                  className="w-full rounded-xl px-4 py-2.5 bg-white text-black text-sm leading-normal border border-transparent focus:ring-2 focus:ring-[#91BB63]/40"
                />
              </div>
            </div>

            <div className="mb-3">
              <label className="sr-only" htmlFor="agente">Agente responsável</label>
              <div className="relative">
                <select
                  id="agente"
                  value={filters.agent}
                  onChange={(e) => onChange("agent", e.target.value)}
                  className="w-full rounded-xl px-4 pr-10 py-2.5 bg-white text-black text-sm leading-normal border border-transparent focus:ring-2 focus:ring-[#91BB63]/40 appearance-none"
                >
                  <option value="">Agente</option>
                  <option value="1">Agente A</option>
                  <option value="2">Agente B</option>
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
                  value={filters.view}
                  onChange={(e) => onChange("view", e.target.value)}
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
  pisCriadas: number;
  fomentoCaptado: number;
  eventosInovacao: number;
  alunosParticipantes: number;
};

function BRL(v: unknown) {
  const n = typeof v === "number" ? v : Number(v);
  if (!isFinite(n)) return "—";
  return n.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

export default function VisitantePage() {
  const [collapsed, setCollapsed] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [filters, setFilters] = useState({ from: "", to: "", agent: "", view: "both" });

  const [metrics, setMetrics] = useState<Metrics | null>(null);
  const [series, setSeries] = useState<{ monthly: any[]; impactos: any[] } | null>(null);

  // Garanta min-w-0 nos ancestrais e monte gráficos só após mount
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  const showCards  = filters.view === "cards"  || filters.view === "both";
  const showCharts = filters.view === "charts" || filters.view === "both";

  async function safeJson(res: Response) {
    try {
      const ct = res.headers.get("content-type") || "";
      if (!ct.includes("application/json")) return null;
      return await res.json();
    } catch { return null; }
  }

  async function load() {
    if (!showCards) return;
    const p = new URLSearchParams();
    if (filters.from) p.set("from", filters.from);
    if (filters.to) p.set("to", filters.to);
    if (filters.agent) p.set("agent", filters.agent);
    if (searchValue.trim()) p.set("q", searchValue.trim());

    const res = await fetch(`/api/visitantes/metrics?${p.toString()}`);
    const json = await safeJson(res);
    setMetrics(json ?? {
      negociosGerados: 0,
      disciplinasInovacao: 0,
      pisCriadas: 0,
      fomentoCaptado: 0,
      eventosInovacao: 0,
      alunosParticipantes: 0,
    });
  }

  async function loadSeries() {
    if (!showCharts) return;
    const p = new URLSearchParams();
    if (filters.from) p.set("from", filters.from);
    if (filters.to) p.set("to", filters.to);
    if (filters.agent) p.set("agent", filters.agent);
    if (searchValue.trim()) p.set("q", searchValue.trim());

    const res = await fetch(`/api/visitantes/series?${p.toString()}`);
    const json = await safeJson(res);
    setSeries(json ?? { monthly: [], impactos: [] });
  }

  useEffect(() => {
    const t = setTimeout(() => {
      load();       // busca cards se necessário
      loadSeries(); // busca gráficos se necessário
    }, 300);
    return () => clearTimeout(t);
  }, [filters.from, filters.to, filters.agent, filters.view, searchValue]);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <LocalNavBar
        onToggleSB={() => setCollapsed(v => !v)}
        onSearchChange={setSearchValue}
        searchValue={searchValue}
      />

      <div className="flex flex-1 pt-14">
        <LocalSideBar
          collapsed={collapsed}
          filters={filters}
          onChange={(k, v) => setFilters(f => ({ ...f, [k]: v }))}
          onApply={() => {}} // evitamos duplicidade
        />

        <main className="flex-1 p-4 max-w-[1200px] mx-auto min-w-0">
          {/* === LINHA DE CARDS (layout original) === */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-6">
            <div className="bg-white rounded-2xl p-6 shadow-md text-center">
              <div style={{ color: "#000", fontSize: 13, fontWeight: 500 }}>Negócios gerados:</div>
              <div style={{ color: "#000", fontSize: 28, fontWeight: 700 }}>{metrics?.negociosGerados ?? 0}</div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-md text-center">
              <div style={{ color: "#000", fontSize: 13, fontWeight: 500 }}>Disciplinas de inovação:</div>
              <div style={{ color: "#000", fontSize: 28, fontWeight: 700 }}>{metrics?.disciplinasInovacao ?? 0}</div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-md text-center">
              <div style={{ color: "#000", fontSize: 13, fontWeight: 500 }}>PIs criadas:</div>
              <div style={{ color: "#000", fontSize: 28, fontWeight: 700 }}>{metrics?.pisCriadas ?? 0}</div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-md text-center">
              <div style={{ color: "#000", fontSize: 13, fontWeight: 500 }}>Fomento captado:</div>
              <div style={{ color: "#000", fontSize: 28, fontWeight: 700 }}>{BRL(metrics?.fomentoCaptado ?? 0)}</div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-md text-center">
              <div style={{ color: "#000", fontSize: 13, fontWeight: 500 }}>Eventos realizados:</div>
              <div style={{ color: "#000", fontSize: 28, fontWeight: 700 }}>{metrics?.eventosInovacao ?? 0}</div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-md text-center">
              <div style={{ color: "#000", fontSize: 13, fontWeight: 500 }}>Alunos envolvidos:</div>
              <div style={{ color: "#000", fontSize: 28, fontWeight: 700 }}>{metrics?.alunosParticipantes ?? 0}</div>
            </div>
          </div>

          {/* === GRÁFICOS (como no layout original) === */}
          <div className="bg-white rounded-2xl p-6 shadow-md mb-6">
            <h3 className="text-sm font-semibold text-zinc-700 mb-3">Evolução da inovação na UFOPA</h3>
            <MonthlyLineChart data={series?.monthly ?? []} />
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-md">
            <h3 className="text-sm font-semibold text-zinc-700 mb-3">Impactos gerados por disciplinas</h3>
            <ImpactChart data={series?.impactos ?? []} />
          </div>

          {/* Removidos: blocos “Resumo”, “Gráficos Mensais” (com prop series),
              “Impactos ao longo do tempo” (com prop series) e a “Tabela de Detalhes” */}
        </main>
      </div>
    </div>
  );
}
