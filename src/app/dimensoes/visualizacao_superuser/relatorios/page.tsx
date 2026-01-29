"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { FaCheck, FaPen, FaArrowRight, FaArrowLeft, FaTrash } from "react-icons/fa";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  AreaChart,
  Area,
  PieChart,
  Pie,
  Cell,
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  RadialBarChart,
  RadialBar,
  ScatterChart,
  Scatter,
  Treemap,
  ComposedChart,
  Funnel,
  FunnelChart,
  LabelList,
} from "recharts";
import { buildChartData, ChartDatum, ChartFilters, ReportDetalhes } from "@/src/lib/reportCharts";
import "../../../../css/NavBar.css";

type FilterOption = {
  id: string;
  label: string;
  checked: boolean;
  editable?: boolean;
};

type CustomChart = {
  id: string;
  chartType: string;
  filters: { [key: string]: string };
  createdAt: string;
};

type ApiResponse = {
  detalhes: ReportDetalhes;
};

const CHART_COLORS = ["#6366f1", "#818cf8", "#a5b4fc", "#c7d2fe"];

export default function RelatoriosPage() {
  const [showReport, setShowReport] = useState(false);
  const [reportGeneratedAt, setReportGeneratedAt] = useState<Date | null>(null);
  const [customCharts, setCustomCharts] = useState<CustomChart[]>([]);
  const [filters, setFilters] = useState<FilterOption[]>([
    { id: "disciplinas", label: "Disciplinas", checked: true },
    { id: "eventos", label: "Eventos", checked: true },
    { id: "motores", label: "Motores", checked: true },
    { id: "negocios", label: "Negocios", checked: true },
    { id: "cursos", label: "Cursos e fomento", checked: true },
    { id: "relacoes", label: "Relacoes", checked: true },
    { id: "custom", label: "Indicador personalizavel", checked: true, editable: true },
  ]);

  const [sourceData, setSourceData] = useState<ReportDetalhes | null>(null);

  useEffect(() => {
    // Carregar gráficos customizados do localStorage
    const savedCustomCharts = JSON.parse(localStorage.getItem("customReportCharts") || "[]");
    setCustomCharts(savedCustomCharts);
  }, []);

  const handleGenerateReport = async () => {
    // Recarregar gráficos customizados
    const savedCustomCharts = JSON.parse(localStorage.getItem("customReportCharts") || "[]");
    setCustomCharts(savedCustomCharts);
    await fetchReportData();
    setReportGeneratedAt(new Date());
    setShowReport(true);
  };

  const isFilterChecked = (id: string) => {
    return filters.find(f => f.id === id)?.checked ?? false;
  };

  const fetchReportData = async () => {
    try {
      const response = await fetch("/api/visualizacao_superuser/ver_dados");
      if (!response.ok) {
        throw new Error("Falha ao carregar dados.");
      }

      const data: ApiResponse = await response.json();
      setSourceData(data.detalhes);
    } catch (error) {
      console.error("Erro ao buscar dados:", error);
    }
  };

  const toggleFilter = (id: string) => {
    setFilters(prev => prev.map(f => f.id === id ? { ...f, checked: !f.checked } : f));
  };

  const formatCurrency = (value: number) => {
    return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
  };

  const formatOptionalNumber = (value: number | null | undefined) => {
    if (value === null || value === undefined) return "N/D";
    return value;
  };

  const formatOptionalCurrency = (value: number | null | undefined) => {
    if (value === null || value === undefined) return "N/D";
    return formatCurrency(value);
  };

  const formatDate = (value?: string) => {
    if (!value) return "-";
    const date = new Date(value);
    if (Number.isNaN(date.getTime())) return "-";
    return date.toLocaleDateString("pt-BR");
  };

  const sumBy = (items: Array<Record<string, any>>, key: string) => {
    return items.reduce((acc, item) => acc + (Number(item?.[key]) || 0), 0);
  };

  const formatPercent = (value: number) => {
    return `${value.toFixed(1)}%`;
  };

  const countCompeticoes = (value?: string[] | string | null) => {
    if (!value) return 0;
    if (Array.isArray(value)) return value.filter(Boolean).length;
    const items = value
      .split(/[,;|]/)
      .map((item) => item.trim())
      .filter(Boolean);
    return items.length;
  };

  const handleExportPdf = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  const handleRemoveChart = (id: string) => {
    setCustomCharts((prev) => {
      const next = prev.filter((chart) => chart.id !== id);
      localStorage.setItem("customReportCharts", JSON.stringify(next));
      return next;
    });
  };

  const renderCustomChart = (chartType: string, data: ChartDatum[]) => {
    const maxValue = data.length > 0 ? Math.max(...data.map((item) => item.value)) : 0;
    const radarData = data.map((item) => ({
      subject: item.name,
      A: item.value,
      fullMark: maxValue || 1,
    }));
    const radialData = data.map((item, index) => ({
      name: item.name,
      value: item.value,
      fill: CHART_COLORS[index % CHART_COLORS.length],
    }));
    const treemapData = data.map((item, index) => ({
      name: item.name,
      size: item.value,
      fill: CHART_COLORS[index % CHART_COLORS.length],
    }));
    const scatterData = data.map((item, index) => ({
      x: index + 1,
      y: item.value,
      name: item.name,
    }));
    const funnelData = data.map((item, index) => ({
      value: item.value,
      name: item.name,
      fill: CHART_COLORS[index % CHART_COLORS.length],
    }));

    switch (chartType) {
      case "bar-chart":
      case "stacked-bar":
        return (
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
            <XAxis dataKey="name" tick={{ fontSize: 8 }} stroke="#999" />
            <YAxis tick={{ fontSize: 8 }} stroke="#999" />
            <Tooltip />
            <Bar dataKey="value" fill="#6366f1" />
          </BarChart>
        );

      case "line-chart":
        return (
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
            <XAxis dataKey="name" tick={{ fontSize: 8 }} stroke="#999" />
            <YAxis tick={{ fontSize: 8 }} stroke="#999" />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="value"
              stroke="#6366f1"
              strokeWidth={2}
              dot={{ fill: "#6366f1", r: 3 }}
            />
          </LineChart>
        );

      case "area-chart":
        return (
          <AreaChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
            <XAxis dataKey="name" tick={{ fontSize: 8 }} stroke="#999" />
            <YAxis tick={{ fontSize: 8 }} stroke="#999" />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="value"
              stroke="#6366f1"
              fill="#6366f1"
              fillOpacity={0.3}
            />
          </AreaChart>
        );

      case "pie-chart":
        return (
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              outerRadius={60}
              dataKey="value"
              label
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={CHART_COLORS[index % CHART_COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        );

      case "donut-chart":
        return (
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={40}
              outerRadius={60}
              dataKey="value"
              label
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={CHART_COLORS[index % CHART_COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        );

      case "radar-chart":
        return (
          <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarData}>
            <PolarGrid />
            <PolarAngleAxis dataKey="subject" tick={{ fontSize: 8 }} />
            <PolarRadiusAxis angle={30} domain={[0, maxValue || 1]} />
            <Radar name="Dados" dataKey="A" stroke="#6366f1" fill="#6366f1" fillOpacity={0.5} />
            <Tooltip />
          </RadarChart>
        );

      case "radialbar-chart":
        return (
          <RadialBarChart
            cx="50%"
            cy="50%"
            innerRadius="20%"
            outerRadius="90%"
            data={radialData}
            startAngle={180}
            endAngle={0}
          >
            <RadialBar
              label={{ position: "insideStart", fill: "#fff", fontSize: 8 }}
              background
              dataKey="value"
            />
            <Tooltip />
          </RadialBarChart>
        );

      case "scatter-chart":
        return (
          <ScatterChart>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis type="number" dataKey="x" name="X" tick={{ fontSize: 8 }} />
            <YAxis type="number" dataKey="y" name="Y" tick={{ fontSize: 8 }} />
            <Tooltip cursor={{ strokeDasharray: "3 3" }} />
            <Scatter name="Dados" data={scatterData} fill="#6366f1" />
          </ScatterChart>
        );

      case "composed-chart":
        return (
          <ComposedChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" tick={{ fontSize: 8 }} />
            <YAxis tick={{ fontSize: 8 }} />
            <Tooltip />
            <Bar dataKey="value" fill="#6366f1" />
            <Line type="monotone" dataKey="value" stroke="#ef4444" strokeWidth={2} />
          </ComposedChart>
        );

      case "funnel-chart":
        return (
          <FunnelChart>
            <Tooltip />
            <Funnel dataKey="value" data={funnelData} isAnimationActive>
              <LabelList position="center" fill="#fff" stroke="none" dataKey="name" fontSize={8} />
            </Funnel>
          </FunnelChart>
        );

      case "treemap-chart":
        return (
          <Treemap
            data={treemapData}
            dataKey="size"
            aspectRatio={4 / 3}
            stroke="#fff"
            fill="#6366f1"
          >
            <Tooltip />
          </Treemap>
        );

      default:
        return (
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
            <XAxis dataKey="name" tick={{ fontSize: 8 }} stroke="#999" />
            <YAxis tick={{ fontSize: 8 }} stroke="#999" />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="value"
              stroke="#6366f1"
              strokeWidth={2}
              dot={{ fill: "#6366f1", r: 3 }}
            />
          </LineChart>
        );
    }
  };

  const disciplinas = sourceData?.disciplinas ?? [];
  const eventos = sourceData?.eventos ?? [];
  const motores = sourceData?.motores ?? [];
  const negocios = sourceData?.negocios ?? [];
  const cursos = sourceData?.cursos ?? [];
  const relacoesDimensoes = sourceData?.relacoes_dimensoes ?? [];

  const alunosMatriculados = sumBy(disciplinas, "alunos_matriculados");
  const alunosAprovados = sumBy(disciplinas, "alunos_aprovados");
  const taxaAprovacao = alunosMatriculados > 0
    ? formatPercent((alunosAprovados / alunosMatriculados) * 100)
    : "N/D";

  const eventosPublico = sumBy(eventos, "qtd_publico");
  const eventosReceita = sumBy(eventos, "receita");
  const eventosCusto = sumBy(eventos, "custo");
  const receitaLiquida = eventosReceita - eventosCusto;

  const empresasAtendidas = sumBy(motores, "qtd_empresas_atendidas");
  const faturamentoMotores = sumBy(motores, "faturamento");
  const projetosAtivos = motores.reduce((acc, motor) => {
    const projetos = Array.isArray(motor.projetos) ? motor.projetos : [];
    const ativos = projetos.filter((projeto) => {
      const status = typeof projeto === "object" && projeto !== null
        ? String((projeto as { status?: string }).status ?? "").toLowerCase()
        : "";
      return status !== "encerrado" && status !== "cancelado";
    }).length;
    return acc + ativos;
  }, 0);

  const faturamentoNegocios = sumBy(negocios, "faturamento_anual");
  const areasCount = new Set(negocios.map((n) => n.area_atuacao).filter(Boolean)).size;
  const portesCount = new Set(negocios.map((n) => n.porte).filter(Boolean)).size;

  // fomento é um array JSON de { date, valor }, precisa somar os valores
  const fomentoTotal = cursos.reduce((acc, curso) => {
    if (!curso.fomento || !Array.isArray(curso.fomento)) return acc;
    const somaFomento = (curso.fomento as Array<{ date?: string; valor?: string | number }>).reduce(
      (s, f) => s + Number(String(f.valor ?? 0).replace(",", ".")),
      0
    );
    return acc + somaFomento;
  }, 0);
  const capitalTotal = sumBy(cursos, "capital_captado");
  const competicoesTotal = cursos.reduce(
    (acc, curso) => acc + countCompeticoes(curso.competicoes),
    0
  );
  const disciplinasPorCurso = cursos
    .map((curso) => ({
      nome: curso.nome,
      total: curso.disciplinas?.length || 0,
    }))
    .sort((a, b) => b.total - a.total);
  const disciplinasTotal = disciplinasPorCurso.reduce((acc, item) => acc + item.total, 0);

  // Dados para gráfico de barras: fomento por curso
  const fomentoPorCurso = cursos.map((curso) => {
    let fomento = 0;
    if (curso.fomento && Array.isArray(curso.fomento)) {
      fomento = (curso.fomento as Array<{ date?: string; valor?: string | number }>).reduce(
        (s, f) => s + Number(String(f.valor ?? 0).replace(",", ".")),
        0
      );
    }
    return {
      nome: curso.nome.length > 15 ? curso.nome.substring(0, 15) + "..." : curso.nome,
      fomento,
    };
  }).filter(item => item.fomento > 0).sort((a, b) => b.fomento - a.fomento);

  const relacoesFormatadas = relacoesDimensoes.map((relacao) => ({
    a: relacao.a.nome ?? `${relacao.a.tipo} #${relacao.a.id}`,
    b: relacao.b.nome ?? `${relacao.b.tipo} #${relacao.b.id}`,
  }));
  const dimensoesRelacionadas = new Set(
    relacoesFormatadas.flatMap((relacao) => [relacao.a, relacao.b])
  ).size;
  const reportSemesterLabel = reportGeneratedAt
    ? `${reportGeneratedAt.getMonth() < 6 ? "1" : "2"}o semestre de ${reportGeneratedAt.getFullYear()}`
    : "-";
  const reportDateLabel = reportGeneratedAt ? formatDate(reportGeneratedAt.toISOString()) : "-";

  return (
    <div className="min-h-screen flex flex-col bg-[#E8E8E8] print:bg-white">
      {/* NavBar */}
      <nav className="bg-[#A3CE6F] h-20 flex items-center justify-between px-12 shrink-0 print:hidden">
        <Link href="/dimensoes/visualizacao_superuser">
          <FaArrowLeft className="w-10 h-10 text-white cursor-pointer" />
        </Link>
        <h1 className="text-[#2a5a0a] text-3xl font-bold">Exibição de dados</h1>
        <Link href="/login" className="w-10 h-10 rounded-full overflow-hidden bg-white/70">
          <img src="/default-avatar-profile-icon.webp" alt="Perfil" className="w-full h-full object-cover" />
        </Link>
      </nav>

      {/* Conteúdo */}
      <div className="flex flex-1">
        {/* Sidebar de filtros */}
        <aside className="w-72 bg-[#4C7F16] text-white p-6 shrink-0 print:hidden">
          <h2 className="text-lg font-semibold mb-6">Selecione as informações</h2>
          
          <div className="space-y-3">
            {filters.map((filter) => (
              <div
                key={filter.id}
                className="flex items-center gap-3 cursor-pointer group"
              >
                <div 
                  onClick={() => toggleFilter(filter.id)}
                  className={`w-6 h-6 rounded flex items-center justify-center ${filter.checked ? "bg-[#2F6F10]" : "bg-white/20"}`}
                >
                  {filter.checked && <FaCheck size={12} />}
                </div>
                <span 
                  onClick={() => toggleFilter(filter.id)}
                  className="flex-1 bg-[#5a9a2a] px-3 py-2 rounded text-sm"
                >
                  {filter.label}
                </span>
                {filter.editable && (
                  <Link href="/dimensoes/visualizacao_superuser/relatorios/indicador_personalizavel">
                    <FaPen size={12} className="opacity-60 hover:opacity-100 transition" />
                  </Link>
                )}
              </div>
            ))}
          </div>

          <button 
            onClick={handleGenerateReport}
            className="mt-8 bg-[#3d6812] hover:bg-[#2d5010] px-6 py-2 rounded text-sm transition"
          >
            Gerar relatório
          </button>
        </aside>

        {/* Área do relatório */}
        <main className="flex-1 p-6 overflow-auto">
          {!showReport ? (
            <div className="bg-white rounded-lg shadow-lg max-w-4xl mx-auto p-8 flex flex-col items-center justify-center min-h-[400px]">
              <p className="text-gray-500 text-lg">Selecione as informações desejadas e clique em &quot;Gerar relatório&quot;</p>
            </div>
          ) : (
          <div className="bg-white rounded-lg shadow-lg max-w-4xl mx-auto p-8 print:shadow-none print:max-w-none print:rounded-none print:p-0">
            {/* Cabeçalho do relatório */}
            <div className="flex justify-between items-start mb-6 border-b pb-4">
              <div>
                <p className="text-2xl font-bold text-[#2a5a0a]">UFOPA</p>
                <p className="text-xs text-gray-500 mt-1">Relatorio {reportSemesterLabel}</p>
                <p className="text-xs text-gray-500">Emitido por Nucleo {reportDateLabel}</p>
              </div>
            </div>

            <h2 className="text-xl font-bold text-gray-800 mb-1">Relatorio Institucional</h2>
            <p className="text-sm text-gray-600 mb-6">Inovação e Empreendedorismo empreendedorismo UFOPA</p>

            {sourceData ? (
              <>
                {isFilterChecked("disciplinas") && (
                  <section className="mb-8">
                    <h3 className="text-sm font-semibold text-gray-700 mb-3 border-b pb-1">Disciplinas e alunos</h3>
                    <div className="grid grid-cols-2 gap-x-8 gap-y-1 text-sm">
                      <div className="flex justify-between py-1">
                        <span className="text-gray-600">Disciplinas cadastradas</span>
                        <span className="font-medium">{disciplinas.length}</span>
                      </div>
                      <div className="flex justify-between py-1">
                        <span className="text-gray-600">Alunos matriculados</span>
                        <span className="font-medium">{formatOptionalNumber(alunosMatriculados)}</span>
                      </div>
                      <div className="flex justify-between py-1">
                        <span className="text-gray-600">Alunos aprovados</span>
                        <span className="font-medium">{formatOptionalNumber(alunosAprovados)}</span>
                      </div>
                      <div className="flex justify-between py-1">
                        <span className="text-gray-600">Taxa de aprovacao</span>
                        <span className="font-medium">{taxaAprovacao}</span>
                      </div>
                    </div>
                    <div className="mt-3 overflow-x-auto">
                      <table className="w-full text-xs">
                        <thead>
                          <tr className="border-b">
                            <th className="text-left py-1 font-medium text-gray-600">Disciplina</th>
                            <th className="text-left py-1 font-medium text-gray-600">Coordenador</th>
                            <th className="text-left py-1 font-medium text-gray-600">Semestre</th>
                            <th className="text-right py-1 font-medium text-gray-600">Matriculados</th>
                            <th className="text-right py-1 font-medium text-gray-600">Aprovados</th>
                          </tr>
                        </thead>
                        <tbody>
                          {disciplinas.length === 0 ? (
                            <tr>
                              <td colSpan={5} className="py-2 text-center text-gray-400">
                                Sem dados
                              </td>
                            </tr>
                          ) : (
                            disciplinas.map((d, i) => (
                              <tr key={`${d.nome}-${i}`} className="border-b border-gray-100">
                                <td className="py-1 text-blue-600">{d.nome}</td>
                                <td className="py-1">{d.coordenador || "-"}</td>
                                <td className="py-1">{d.semestre || "-"}</td>
                                <td className="py-1 text-right">{formatOptionalNumber(d.alunos_matriculados)}</td>
                                <td className="py-1 text-right">{formatOptionalNumber(d.alunos_aprovados)}</td>
                              </tr>
                            ))
                          )}
                        </tbody>
                      </table>
                    </div>
                  </section>
                )}

                {isFilterChecked("eventos") && (
                  <section className="mb-8">
                    <h3 className="text-sm font-semibold text-gray-700 mb-3 border-b pb-1">Eventos e publico</h3>
                    <div className="grid grid-cols-2 gap-x-8 gap-y-1 text-sm">
                      <div className="flex justify-between py-1">
                        <span className="text-gray-600">Eventos realizados</span>
                        <span className="font-medium">{eventos.length}</span>
                      </div>
                      <div className="flex justify-between py-1">
                        <span className="text-gray-600">Publico total</span>
                        <span className="font-medium">{formatOptionalNumber(eventosPublico)}</span>
                      </div>
                      <div className="flex justify-between py-1">
                        <span className="text-gray-600">Receita total</span>
                        <span className="font-medium">{formatCurrency(eventosReceita)}</span>
                      </div>
                      <div className="flex justify-between py-1">
                        <span className="text-gray-600">Custo total</span>
                        <span className="font-medium">{formatCurrency(eventosCusto)}</span>
                      </div>
                      <div className="flex justify-between py-1">
                        <span className="text-gray-600">Receita liquida</span>
                        <span className="font-medium">{formatCurrency(receitaLiquida)}</span>
                      </div>
                    </div>
                    <div className="mt-3 overflow-x-auto">
                      <table className="w-full text-xs">
                        <thead>
                          <tr className="border-b">
                            <th className="text-left py-1 font-medium text-gray-600">Evento</th>
                            <th className="text-left py-1 font-medium text-gray-600">Inicio</th>
                            <th className="text-left py-1 font-medium text-gray-600">Duracao</th>
                            <th className="text-right py-1 font-medium text-gray-600">Publico</th>
                            <th className="text-right py-1 font-medium text-gray-600">Receita</th>
                            <th className="text-right py-1 font-medium text-gray-600">Custo</th>
                          </tr>
                        </thead>
                        <tbody>
                          {eventos.length === 0 ? (
                            <tr>
                              <td colSpan={6} className="py-2 text-center text-gray-400">
                                Sem dados
                              </td>
                            </tr>
                          ) : (
                            eventos.map((e, i) => (
                              <tr key={`${e.nome}-${i}`} className="border-b border-gray-100">
                                <td className="py-1 text-blue-600">{e.nome}</td>
                                <td className="py-1">{formatDate(e.data_inicio)}</td>
                                <td className="py-1">{e.duracao || "-"}</td>
                                <td className="py-1 text-right">{formatOptionalNumber(e.qtd_publico)}</td>
                                <td className="py-1 text-right">{formatOptionalCurrency(e.receita)}</td>
                                <td className="py-1 text-right">{formatOptionalCurrency(e.custo)}</td>
                              </tr>
                            ))
                          )}
                        </tbody>
                      </table>
                    </div>
                  </section>
                )}

                {isFilterChecked("motores") && (
                  <section className="mb-8">
                    <h3 className="text-sm font-semibold text-gray-700 mb-3 border-b pb-1">Motores de inovacao</h3>
                    <div className="grid grid-cols-2 gap-x-8 gap-y-1 text-sm">
                      <div className="flex justify-between py-1">
                        <span className="text-gray-600">Motores cadastrados</span>
                        <span className="font-medium">{motores.length}</span>
                      </div>
                      <div className="flex justify-between py-1">
                        <span className="text-gray-600">Empresas atendidas</span>
                        <span className="font-medium">{formatOptionalNumber(empresasAtendidas)}</span>
                      </div>
                      <div className="flex justify-between py-1">
                        <span className="text-gray-600">Projetos ativos</span>
                        <span className="font-medium">{formatOptionalNumber(projetosAtivos)}</span>
                      </div>
                      <div className="flex justify-between py-1">
                        <span className="text-gray-600">Faturamento total</span>
                        <span className="font-medium">{formatCurrency(faturamentoMotores)}</span>
                      </div>
                    </div>
                    <div className="mt-3 overflow-x-auto">
                      <table className="w-full text-xs">
                        <thead>
                          <tr className="border-b">
                            <th className="text-left py-1 font-medium text-gray-600">Motor</th>
                            <th className="text-left py-1 font-medium text-gray-600">Tipo</th>
                            <th className="text-left py-1 font-medium text-gray-600">Criacao</th>
                            <th className="text-right py-1 font-medium text-gray-600">Empresas</th>
                            <th className="text-right py-1 font-medium text-gray-600">Projetos</th>
                            <th className="text-right py-1 font-medium text-gray-600">Faturamento</th>
                          </tr>
                        </thead>
                        <tbody>
                          {motores.length === 0 ? (
                            <tr>
                              <td colSpan={6} className="py-2 text-center text-gray-400">
                                Sem dados
                              </td>
                            </tr>
                          ) : (
                            motores.map((m, i) => {
                              const projetosCount = Array.isArray(m.projetos) ? m.projetos.length : 0;
                              return (
                                <tr key={`${m.nome}-${i}`} className="border-b border-gray-100">
                                  <td className="py-1 text-blue-600">{m.nome}</td>
                                  <td className="py-1">{m.motor_tipo || "-"}</td>
                                  <td className="py-1">{formatDate(m.data_criacao)}</td>
                                  <td className="py-1 text-right">{formatOptionalNumber(m.qtd_empresas_atendidas)}</td>
                                  <td className="py-1 text-right">{formatOptionalNumber(projetosCount)}</td>
                                  <td className="py-1 text-right">{formatOptionalCurrency(m.faturamento)}</td>
                                </tr>
                              );
                            })
                          )}
                        </tbody>
                      </table>
                    </div>
                  </section>
                )}

                {isFilterChecked("negocios") && (
                  <section className="mb-8">
                    <h3 className="text-sm font-semibold text-gray-700 mb-3 border-b pb-1">Negocios e resultados</h3>
                    <div className="grid grid-cols-2 gap-x-8 gap-y-1 text-sm">
                      <div className="flex justify-between py-1">
                        <span className="text-gray-600">Negocios cadastrados</span>
                        <span className="font-medium">{negocios.length}</span>
                      </div>
                      <div className="flex justify-between py-1">
                        <span className="text-gray-600">Faturamento total</span>
                        <span className="font-medium">{formatCurrency(faturamentoNegocios)}</span>
                      </div>
                      <div className="flex justify-between py-1">
                        <span className="text-gray-600">Areas atendidas</span>
                        <span className="font-medium">{areasCount}</span>
                      </div>
                      <div className="flex justify-between py-1">
                        <span className="text-gray-600">Portes distintos</span>
                        <span className="font-medium">{portesCount}</span>
                      </div>
                    </div>
                    <div className="mt-3 overflow-x-auto">
                      <table className="w-full text-xs">
                        <thead>
                          <tr className="border-b">
                            <th className="text-left py-1 font-medium text-gray-600">Negocio</th>
                            <th className="text-left py-1 font-medium text-gray-600">Area</th>
                            <th className="text-left py-1 font-medium text-gray-600">Porte</th>
                            <th className="text-left py-1 font-medium text-gray-600">Fundadores</th>
                            <th className="text-left py-1 font-medium text-gray-600">Criacao</th>
                            <th className="text-right py-1 font-medium text-gray-600">Faturamento</th>
                          </tr>
                        </thead>
                        <tbody>
                          {negocios.length === 0 ? (
                            <tr>
                              <td colSpan={6} className="py-2 text-center text-gray-400">
                                Sem dados
                              </td>
                            </tr>
                          ) : (
                            negocios.map((n, i) => (
                              <tr key={`${n.nome}-${i}`} className="border-b border-gray-100">
                                <td className="py-1 text-blue-600">{n.nome}</td>
                                <td className="py-1">{n.area_atuacao || "-"}</td>
                                <td className="py-1">{n.porte || "-"}</td>
                                <td className="py-1">{n.fundadores?.join(", ") || "-"}</td>
                                <td className="py-1">{formatDate(n.data_criacao)}</td>
                                <td className="py-1 text-right">{formatOptionalCurrency(n.faturamento_anual)}</td>
                              </tr>
                            ))
                          )}
                        </tbody>
                      </table>
                    </div>
                  </section>
                )}

                {isFilterChecked("cursos") && (
                  <section className="mb-8">
                    <h3 className="text-sm font-semibold text-gray-700 mb-3 border-b pb-1">Cursos e fomento</h3>
                    <div className="grid grid-cols-2 gap-x-8 gap-y-1 text-sm">
                      <div className="flex justify-between py-1">
                        <span className="text-gray-600">Cursos cadastrados</span>
                        <span className="font-medium">{cursos.length}</span>
                      </div>
                      <div className="flex justify-between py-1">
                        <span className="text-gray-600">Disciplinas nos cursos</span>
                        <span className="font-medium">{disciplinasTotal}</span>
                      </div>
                      <div className="flex justify-between py-1">
                        <span className="text-gray-600">Competicoes registradas</span>
                        <span className="font-medium">{competicoesTotal}</span>
                      </div>
                      <div className="flex justify-between py-1">
                        <span className="text-gray-600">Fomento total</span>
                        <span className="font-medium">{formatCurrency(fomentoTotal)}</span>
                      </div>
                      <div className="flex justify-between py-1">
                        <span className="text-gray-600">Capital captado</span>
                        <span className="font-medium">{formatCurrency(capitalTotal)}</span>
                      </div>
                    </div>
                    {/* Gráfico de Barras - Fomento por Curso */}
                    {fomentoPorCurso.length > 0 && (
                      <div className="mt-4 mb-6">
                        <h4 className="text-xs font-semibold text-gray-600 mb-2">Fomento captado por curso</h4>
                        <ResponsiveContainer width="100%" height={250}>
                          <BarChart data={fomentoPorCurso} margin={{ top: 20, right: 30, left: 20, bottom: 60 }}>
                            <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                            <XAxis 
                              dataKey="nome" 
                              tick={{ fontSize: 9, angle: -45, textAnchor: 'end' }} 
                              height={60}
                              interval={0}
                            />
                            <YAxis tick={{ fontSize: 10 }} tickFormatter={(v) => `R$ ${(v/1000).toFixed(0)}k`} />
                            <Tooltip formatter={(value: number) => [formatCurrency(value), 'Fomento']} />
                            <Bar dataKey="fomento" radius={[4, 4, 0, 0]}>
                              {fomentoPorCurso.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={CHART_COLORS[index % CHART_COLORS.length]} />
                              ))}
                            </Bar>
                          </BarChart>
                        </ResponsiveContainer>
                      </div>
                    )}

                    <div className="grid grid-cols-2 gap-8 mt-3">
                      <div>
                        <h4 className="text-xs font-semibold text-gray-600 mb-2">Cursos</h4>
                        <table className="w-full text-xs">
                          <thead>
                            <tr className="border-b">
                              <th className="text-left py-1 font-medium text-gray-600">Curso</th>
                              <th className="text-right py-1 font-medium text-gray-600">Disciplinas</th>
                              <th className="text-right py-1 font-medium text-gray-600">Competicoes</th>
                              <th className="text-right py-1 font-medium text-gray-600">Fomento</th>
                              <th className="text-right py-1 font-medium text-gray-600">Capital</th>
                            </tr>
                          </thead>
                          <tbody>
                            {cursos.length === 0 ? (
                              <tr>
                                <td colSpan={5} className="py-2 text-center text-gray-400">
                                  Sem dados
                                </td>
                              </tr>
                            ) : (
                              cursos.map((c, i) => (
                                <tr key={`${c.nome}-${i}`} className="border-b border-gray-100">
                                  <td className="py-1 text-blue-600">{c.nome}</td>
                                  <td className="py-1 text-right">{c.disciplinas?.length || 0}</td>
                                  <td className="py-1 text-right">{countCompeticoes(c.competicoes)}</td>
                                  <td className="py-1 text-right">{formatOptionalCurrency(c.fomento)}</td>
                                  <td className="py-1 text-right">{formatOptionalCurrency(c.capital_captado)}</td>
                                </tr>
                              ))
                            )}
                          </tbody>
                        </table>
                      </div>
                      <div>
                        <h4 className="text-xs font-semibold text-gray-600 mb-2">Disciplinas por curso</h4>
                        <table className="w-full text-xs">
                          <thead>
                            <tr className="border-b">
                              <th className="text-left py-1 font-medium text-gray-600">Curso</th>
                              <th className="text-right py-1 font-medium text-gray-600">Disciplinas</th>
                            </tr>
                          </thead>
                          <tbody>
                            {disciplinasPorCurso.length === 0 ? (
                              <tr>
                                <td colSpan={2} className="py-2 text-center text-gray-400">
                                  Sem dados
                                </td>
                              </tr>
                            ) : (
                              disciplinasPorCurso.map((item, i) => (
                                <tr key={`${item.nome}-${i}`} className="border-b border-gray-100">
                                  <td className="py-1">{item.nome}</td>
                                  <td className="py-1 text-right">{item.total}</td>
                                </tr>
                              ))
                            )}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </section>
                )}

                {isFilterChecked("relacoes") && (
                  <section className="mb-8">
                    <h3 className="text-sm font-semibold text-gray-700 mb-3 border-b pb-1">Relacoes entre dimensoes</h3>
                    <div className="grid grid-cols-2 gap-x-8 gap-y-1 text-sm">
                      <div className="flex justify-between py-1">
                        <span className="text-gray-600">Relacoes cadastradas</span>
                        <span className="font-medium">{relacoesFormatadas.length}</span>
                      </div>
                      <div className="flex justify-between py-1">
                        <span className="text-gray-600">Dimensoes conectadas</span>
                        <span className="font-medium">{dimensoesRelacionadas}</span>
                      </div>
                    </div>
                    <div className="mt-3 overflow-x-auto">
                      <table className="w-full text-xs">
                        <thead>
                          <tr className="border-b">
                            <th className="text-left py-1 font-medium text-gray-600">Dimensao A</th>
                            <th className="text-left py-1 font-medium text-gray-600">Dimensao B</th>
                          </tr>
                        </thead>
                        <tbody>
                          {relacoesFormatadas.length === 0 ? (
                            <tr>
                              <td colSpan={2} className="py-2 text-center text-gray-400">
                                Sem dados
                              </td>
                            </tr>
                          ) : (
                            relacoesFormatadas.map((relacao, i) => (
                              <tr key={`${relacao.a}-${relacao.b}-${i}`} className="border-b border-gray-100">
                                <td className="py-1">{relacao.a}</td>
                                <td className="py-1">{relacao.b}</td>
                              </tr>
                            ))
                          )}
                        </tbody>
                      </table>
                    </div>
                  </section>
                )}

                {isFilterChecked("custom") && customCharts.length > 0 && (
                  <div className="mt-8">
                    <h3 className="text-sm font-semibold text-gray-700 mb-4 border-b pb-1">Indicadores personalizados</h3>
                    <div className="grid grid-cols-2 gap-6">
                      {customCharts.map((chart) => {
                        const chartData = buildChartData(chart.filters as ChartFilters, sourceData);
                        return (
                          <div key={chart.id} className="bg-gray-50 rounded-lg p-4 relative">
                            <button
                              type="button"
                              onClick={() => handleRemoveChart(chart.id)}
                              className="absolute top-2 right-2 text-gray-400 hover:text-red-500 transition print:hidden"
                              aria-label="Remover grafico"
                            >
                              <FaTrash size={12} />
                            </button>
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-xs font-medium text-gray-600">
                                {chart.filters.fonte || "Dados"} - {chart.filters.ano || "2024"}
                              </span>
                              <span className="text-xs text-gray-400">
                                {chart.filters.semestre || "Anual"}
                              </span>
                            </div>
                            <ResponsiveContainer width="100%" height={150}>
                              {renderCustomChart(chart.chartType, chartData)}
                            </ResponsiveContainer>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </>
            ) : (
              <div className="text-sm text-gray-500">Dados indisponiveis.</div>
            )}
            {/* Botao exportar */}
            <div className="flex justify-end mt-8 pt-4 border-t items-center gap-4 print:hidden">
              <button
                type="button"
                onClick={handleExportPdf}
                className="bg-[#4C7F16] hover:bg-[#3d6812] text-white px-6 py-2 rounded flex items-center gap-2 transition"
              >
                Exportar PDF <FaArrowRight size={12} />
              </button>
            </div>

          </div>
          )}
        </main>
      </div>
    </div>
  );
}
