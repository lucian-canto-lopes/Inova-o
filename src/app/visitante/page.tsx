"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

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
type Filters = { from: string; to: string; agent: string; view: "cards" | "charts" | "both" };
type Motor = { dimensaoId: number; nome: string };

function LocalSideBar({
  collapsed,
  filters,
  onChange,
  onApply,
  motores,
}: {
  collapsed: boolean;
  filters: Filters;
  onChange: (key: keyof Filters, value: string) => void;
  onApply: () => void;
  motores: Motor[];
}) {
  return (
    <aside
      className="bg-[#4C7F16] text-white transition-[width,padding] duration-200 shrink-0 sticky top-14"
      style={{
        width: collapsed ? 0 : 300,
        padding: collapsed ? "0" : "24px",
        overflow: "hidden",
        height: "calc(100vh - 56px)",
      }}
    >
      <div className="flex flex-col h-full">
        {/* Mantém sempre branco — não altera com o input */}
        <h2 className="text-3xl font-extrabold mb-4 text-white">Filtros</h2>

        <form
          className="flex-1 flex flex-col justify-start"
          onSubmit={(e) => {
            e.preventDefault();
            onApply();
          }}
        >
          <div>
            <div className="grid grid-cols-2 gap-3 mb-3">
              <label className="sr-only" htmlFor="from">Data inicial</label>
              <input
                id="from"
                type="date"
                value={filters.from}
                onChange={(e) => onChange("from", e.target.value)}
                className="w-full rounded-xl px-4 py-2.5 bg-white text-black text-sm border border-transparent focus:ring-2 focus:ring-[#91BB63]/40"
              />

              <label className="sr-only" htmlFor="to">Data final</label>
              <input
                id="to"
                type="date"
                value={filters.to}
                onChange={(e) => onChange("to", e.target.value)}
                className="w-full rounded-xl px-4 py-2.5 bg-white text-black text-sm border border-transparent focus:ring-2 focus:ring-[#91BB63]/40"
              />
            </div>

            <div className="mb-3">
              <label className="sr-only" htmlFor="agente">Motor responsável</label>
              <div className="relative">
                <select
                  id="agente"
                  value={filters.agent}
                  onChange={(e) => onChange("agent", e.target.value)}
                  className="w-full rounded-xl px-4 pr-10 py-2.5 bg-white text-black text-sm border border-transparent focus:ring-2 focus:ring-[#91BB63]/40 appearance-none"
                >
                  <option value="">Agentes</option>
                  {motores.map((m) => (
                    <option key={m.dimensaoId} value={m.dimensaoId}>
                      {m.nome}
                    </option>
                  ))}
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
                  value={filters.view}
                  onChange={(e) => onChange("view", e.target.value as Filters["view"])}
                  className="w-full rounded-xl px-4 pr-10 py-2.5 bg-white text-black text-sm border border-transparent focus:ring-2 focus:ring-[#91BB63]/40 appearance-none"
                >
                  <option value="cards">Somente cards</option>
                  <option value="charts">Somente gráficos</option>
                  <option value="both">Cards e gráficos</option>
                </select>
                <svg className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#2C5C10] pointer-events-none" viewBox="0 0 20 20" fill="none" aria-hidden>
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

  const [filters, setFilters] = useState<Filters>({
    from: "",
    to: "",
    agent: "",
    view: "both",
  });
  const [appliedFilters, setAppliedFilters] = useState(filters);

  const [metrics, setMetrics] = useState<Metrics | null>(null);
  const [series, setSeries] = useState<SeriesPayload | null>(null);
  const [motores, setMotores] = useState<Motor[]>([]);

  const showCards = appliedFilters.view === "cards" || appliedFilters.view === "both";
  const showCharts = appliedFilters.view === "charts" || appliedFilters.view === "both";

  // Buscar motores ao carregar a página
  useEffect(() => {
    fetch("/api/visitantes/motores")
      .then((r) => r.json())
      .then(setMotores)
      .catch(() => setMotores([]));
  }, []);

  useEffect(() => {
    const params = new URLSearchParams();
    if (appliedFilters.from) params.set("from", appliedFilters.from);
    if (appliedFilters.to) params.set("to", appliedFilters.to);
    if (appliedFilters.agent) params.set("agent", appliedFilters.agent);
    if (searchValue.trim()) params.set("q", searchValue.trim());

    fetch(`/api/visitantes/metrics?${params.toString()}`)
      .then((r) => r.json())
      .then(setMetrics)
      .catch(() =>
        setMetrics({
          negociosGerados: 0,
          disciplinasInovacao: 0,
          editaisPublicados: 0,
          fomentoCaptado: 0,
          eventosInovacao: 0,
          alunosParticipantes: 0,
        })
      );

    if (!showCharts) {
      setSeries(null);
      return;
    }

    fetch(`/api/visitantes/series?${params.toString()}`)
      .then((r) => r.json())
      .then(setSeries)
      .catch(() => setSeries({ monthly: [], impactos: [] }));
  }, [appliedFilters, searchValue, showCharts]);

  return (
    <div className="min-h-screen bg-[#F7F7F7]">
      <LocalNavBar
        onToggleSB={() => setCollapsed((v) => !v)}
        onSearchChange={setSearchValue}
        searchValue={searchValue}
      />
      <div className="h-14" />

      <main className="flex">
        <LocalSideBar
          collapsed={collapsed}
          filters={filters}
          onChange={(key, value) => setFilters((prev) => ({ ...prev, [key]: value }))}
          onApply={() => setAppliedFilters(filters)}
          motores={motores}
        />

        <section className="flex-1">
          <div className="mx-auto w-full max-w-[1280px] px-6 mt-6">
            {showCards && (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                <Card
                  title="Negócios de inovação gerados (UFOPA)"
                  value={metrics?.negociosGerados ?? "—"}
                />
                <Card
                  title="Disciplinas de inovação em cursos de computação"
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
                  title="Alunos participantes em disciplinas de inovação"
                  value={metrics?.alunosParticipantes ?? "—"}
                />
              </div>
            )}

            {showCharts && series && (
              <div className="mt-8 space-y-6 min-w-0">
                <div className="bg-white rounded-xl border border-zinc-200 shadow-sm p-6">
                  <h3 className="text-sm font-semibold text-zinc-800 mb-3">
                    Evolução da inovação na UFOPA
                  </h3>
                  <MonthlyChart data={series.monthly} />
                </div>

                <div className="bg-white rounded-xl border border-zinc-200 shadow-sm p-6">
                  <h3 className="text-sm font-semibold text-zinc-800 mb-3">
                    Impactos gerados por disciplinas
                  </h3>
                  <ImpactChart data={series.impactos} />
                </div>
              </div>
            )}
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
