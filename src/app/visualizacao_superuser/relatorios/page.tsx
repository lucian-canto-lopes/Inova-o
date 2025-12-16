"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaCheck, FaPen, FaArrowRight, FaPlus, FaArrowLeft } from "react-icons/fa";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from "recharts";
import "../../../css/NavBar.css";

type FilterOption = {
  id: string;
  label: string;
  checked: boolean;
  editable?: boolean;
};

type ReportData = {
  projetosAtivos: number;
  alunosEnvolvidos: number;
  negociosCriados: number;
  faturamentoTotal: number;
  postosTrabalho: string;
  financiamentoCaptado: number;
  produtosExportados: number;
  taxaContinuidade: string;
  disciplinas: { nome: string; professor: string }[];
  negocios: { nome: string; area: string; faturamento: number; estagio: string }[];
  motores: { nome: string; empresas: number; financiamento: number }[];
  eventos: { total: number; participantes: number; receita: number; internos: number; externos: number };
};

type CustomChart = {
  id: string;
  chartType: string;
  filters: { [key: string]: string };
  createdAt: string;
};

// Dados de exemplo para gráficos customizados
const sampleChartData = [
  { name: "Jan", value: 30 },
  { name: "Fev", value: 45 },
  { name: "Mar", value: 28 },
  { name: "Abr", value: 80 },
  { name: "Mai", value: 99 },
  { name: "Jun", value: 43 },
  { name: "Jul", value: 50 },
  { name: "Ago", value: 35 },
];

export default function RelatoriosPage() {
  const [showReport, setShowReport] = useState(false);
  const [customCharts, setCustomCharts] = useState<CustomChart[]>([]);
  const [filters, setFilters] = useState<FilterOption[]>([
    { id: "projetos", label: "Número de projetos", checked: true },
    { id: "alunos", label: "Alunos envolvidos", checked: true },
    { id: "faturamento", label: "Faturamento total", checked: true },
    { id: "empregos", label: "Empregos/bolsas criadas", checked: true },
    { id: "custom", label: "Indicador personalizável", checked: true, editable: true },
  ]);

  const [reportData, setReportData] = useState<ReportData | null>(null);

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
    setShowReport(true);
  };

  const isFilterChecked = (id: string) => {
    return filters.find(f => f.id === id)?.checked ?? false;
  };

  const fetchReportData = async () => {
    try {
      // Buscar métricas gerais
      const [motores, disciplinas, negocios, eventos] = await Promise.all([
        fetch("/api/visitantes/motores").then(r => r.json()).catch(() => []),
        fetch("/api/dimensoes/disciplinas").then(r => r.json()).catch(() => []),
        fetch("/api/dimensoes/negocios").then(r => r.json()).catch(() => []),
        fetch("/api/dimensoes/eventos").then(r => r.json()).catch(() => []),
      ]);

      // Calcular métricas
      const faturamentoTotal = negocios.reduce((acc: number, n: any) => acc + (n.data?.faturamento_anual || 0), 0);
      const financiamentoCaptado = motores.reduce((acc: number, m: any) => acc + (m.faturamento || 0), 0);
      const totalEventos = eventos.length;
      const receitaEventos = eventos.reduce((acc: number, e: any) => acc + (e.data?.receita || 0), 0);
      const participantes = eventos.reduce((acc: number, e: any) => acc + (e.data?.qtd_publico || 0), 0);

      setReportData({
        projetosAtivos: 28,
        alunosEnvolvidos: disciplinas.reduce((acc: number, d: any) => acc + (d.data?.alunos_matriculados?.length || 0), 0) || 238,
        negociosCriados: negocios.length || 3,
        faturamentoTotal: faturamentoTotal || 266700,
        postosTrabalho: "18 empregos / 3 bolsas",
        financiamentoCaptado: financiamentoCaptado || 620000,
        produtosExportados: 9,
        taxaContinuidade: "76%",
        disciplinas: disciplinas.slice(0, 5).map((d: any) => ({
          nome: d.data?.nome || "Disciplina",
          professor: d.data?.coordenador || "Professor"
        })),
        negocios: negocios.slice(0, 4).map((n: any) => ({
          nome: n.data?.nome || "Negócio",
          area: n.data?.area_atuacao || "Área",
          faturamento: n.data?.faturamento_anual || 0,
          estagio: n.data?.porte || "Estágio"
        })),
        motores: motores.slice(0, 3).map((m: any) => ({
          nome: m.nome || "Motor",
          empresas: m.qtd_empresas_atendidas || 0,
          financiamento: m.faturamento || 0
        })),
        eventos: {
          total: totalEventos || 9,
          participantes: participantes || 1340,
          receita: receitaEventos || 43360,
          internos: 6,
          externos: 5
        }
      });
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

  return (
    <div className="min-h-screen flex flex-col bg-[#E8E8E8]">
      {/* NavBar */}
      <nav className="bg-[#A3CE6F] h-20 flex items-center justify-between px-12 shrink-0">
        <Link href="/visualizacao_superuser">
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
        <aside className="w-72 bg-[#4C7F16] text-white p-6 shrink-0">
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
                  <Link href="/visualizacao_superuser/relatorios/indicador_personalizavel">
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
          <div className="bg-white rounded-lg shadow-lg max-w-4xl mx-auto p-8">
            {/* Cabeçalho do relatório */}
            <div className="flex justify-between items-start mb-6 border-b pb-4">
              <div>
                <p className="text-2xl font-bold text-[#2a5a0a]">UFOPA</p>
                <p className="text-xs text-gray-500 mt-1">Relatório 2ª semestre de 2023</p>
                <p className="text-xs text-gray-500">Emitido por Nucleo 17/07/2023</p>
              </div>
            </div>

            <h2 className="text-xl font-bold text-gray-800 mb-1">Relatório Institucional</h2>
            <p className="text-sm text-gray-600 mb-6">Inovação e Empreendedorismo empreendedorismo UFOPA</p>

            {reportData && (
              <>
                {/* Visão Geral */}
                <div className="mb-8">
                  <h3 className="text-sm font-semibold text-gray-700 mb-3 border-b pb-1">Visão Geral</h3>
                  <div className="grid grid-cols-2 gap-x-8 gap-y-1 text-sm">
                    {isFilterChecked("projetos") && (
                      <div className="flex justify-between py-1">
                        <span className="text-gray-600">Projetos ativos de inovação</span>
                        <span className="font-medium">{reportData.projetosAtivos}</span>
                      </div>
                    )}
                    {isFilterChecked("alunos") && (
                      <div className="flex justify-between py-1">
                        <span className="text-gray-600">Alunos envolvidos</span>
                        <span className="font-medium">{reportData.alunosEnvolvidos}</span>
                      </div>
                    )}
                    {isFilterChecked("projetos") && (
                      <div className="flex justify-between py-1">
                        <span className="text-gray-600">Negócios criados</span>
                        <span className="font-medium">{reportData.negociosCriados}</span>
                      </div>
                    )}
                    {isFilterChecked("faturamento") && (
                      <div className="flex justify-between py-1">
                        <span className="text-gray-600">Faturamento total dos negócios</span>
                        <span className="font-medium">{formatCurrency(reportData.faturamentoTotal)}</span>
                      </div>
                    )}
                    {isFilterChecked("empregos") && (
                      <div className="flex justify-between py-1">
                        <span className="text-gray-600">Postos de trabalho gerados</span>
                        <span className="font-medium">{reportData.postosTrabalho}</span>
                      </div>
                    )}
                    {isFilterChecked("faturamento") && (
                      <div className="flex justify-between py-1">
                        <span className="text-gray-600">Financiamento captado (motores)</span>
                        <span className="font-medium text-green-600">{formatCurrency(reportData.financiamentoCaptado)}</span>
                      </div>
                    )}
                    {isFilterChecked("custom") && (
                      <>
                        <div className="flex justify-between py-1">
                          <span className="text-gray-600">Produtos/Serviços exportados</span>
                          <span className="font-medium">{reportData.produtosExportados}</span>
                        </div>
                        <div className="flex justify-between py-1">
                          <span className="text-gray-600">Taxa de continuidade dos negócios</span>
                          <span className="font-medium">{reportData.taxaContinuidade}</span>
                        </div>
                      </>
                    )}
                  </div>
                </div>

                {/* Tabelas lado a lado */}
                <div className="grid grid-cols-2 gap-8 mb-8">
                  {/* Disciplinas */}
                  <div>
                    <h3 className="text-sm font-semibold text-gray-700 mb-2">Disciplinas cadastradas</h3>
                    <table className="w-full text-xs">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left py-1 font-medium text-gray-600">Disciplina</th>
                          <th className="text-left py-1 font-medium text-gray-600">Professor</th>
                        </tr>
                      </thead>
                      <tbody>
                        {reportData.disciplinas.map((d, i) => (
                          <tr key={i} className="border-b border-gray-100">
                            <td className="py-1 text-blue-600">{d.nome}</td>
                            <td className="py-1">{d.professor}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* Negócios */}
                  <div>
                    <h3 className="text-sm font-semibold text-gray-700 mb-2">Negócios Criados</h3>
                    <table className="w-full text-xs">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left py-1 font-medium text-gray-600">Nome</th>
                          <th className="text-left py-1 font-medium text-gray-600">Área</th>
                          <th className="text-right py-1 font-medium text-gray-600">Faturamento</th>
                          <th className="text-right py-1 font-medium text-gray-600">Estagiários</th>
                        </tr>
                      </thead>
                      <tbody>
                        {reportData.negocios.map((n, i) => (
                          <tr key={i} className="border-b border-gray-100">
                            <td className="py-1">{n.nome}</td>
                            <td className="py-1">{n.area}</td>
                            <td className="py-1 text-right">{formatCurrency(n.faturamento)}</td>
                            <td className="py-1 text-right">{n.estagio}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Motores e Eventos */}
                <div className="grid grid-cols-2 gap-8">
                  {/* Motores */}
                  <div>
                    <h3 className="text-sm font-semibold text-gray-700 mb-2">Motores de inovação</h3>
                    <table className="w-full text-xs">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left py-1 font-medium text-gray-600"></th>
                          <th className="text-right py-1 font-medium text-gray-600">Empresas</th>
                          <th className="text-right py-1 font-medium text-gray-600">Financiamento</th>
                        </tr>
                      </thead>
                      <tbody>
                        {reportData.motores.map((m, i) => (
                          <tr key={i} className="border-b border-gray-100">
                            <td className="py-1">{m.nome}</td>
                            <td className="py-1 text-right">{m.empresas}</td>
                            <td className="py-1 text-right text-green-600">{formatCurrency(m.financiamento)}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* Eventos */}
                  <div>
                    <h3 className="text-sm font-semibold text-gray-700 mb-2">Eventos promovidos</h3>
                    <div className="text-xs space-y-1">
                      <p>• {reportData.eventos.total} eventos realizados</p>
                      <p>• {reportData.eventos.participantes} público total</p>
                      <p>• {formatCurrency(reportData.eventos.receita)}</p>
                      <p>• {reportData.eventos.internos} internos / {reportData.eventos.externos} externos</p>
                    </div>
                  </div>
                </div>

                {/* Gráficos Personalizados */}
                {isFilterChecked("custom") && customCharts.length > 0 && (
                  <div className="mt-8">
                    <h3 className="text-sm font-semibold text-gray-700 mb-4 border-b pb-1">Indicadores Personalizados</h3>
                    <div className="grid grid-cols-2 gap-6">
                      {customCharts.map((chart, index) => (
                        <div key={chart.id} className="bg-gray-50 rounded-lg p-4">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-xs font-medium text-gray-600">
                              {chart.filters.fonte || "Dados"} - {chart.filters.ano || "2024"}
                            </span>
                            <span className="text-xs text-gray-400">
                              {chart.filters.semestre || "Anual"}
                            </span>
                          </div>
                          <ResponsiveContainer width="100%" height={150}>
                            {chart.chartType?.includes("bar") ? (
                              <BarChart data={sampleChartData}>
                                <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                                <XAxis dataKey="name" tick={{ fontSize: 8 }} stroke="#999" />
                                <YAxis tick={{ fontSize: 8 }} stroke="#999" />
                                <Tooltip />
                                <Bar dataKey="value" fill="#6366f1" />
                              </BarChart>
                            ) : (
                              <LineChart data={sampleChartData}>
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
                            )}
                          </ResponsiveContainer>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </>
            )}

            {/* Botão exportar */}
            <div className="flex justify-end mt-8 pt-4 border-t items-center gap-4">
              <span className="text-xs text-gray-500">☐ Exportar como</span>
              <span className="text-xs text-gray-500">☐ BPDF</span>
              <button className="bg-[#4C7F16] hover:bg-[#3d6812] text-white px-6 py-2 rounded flex items-center gap-2 transition">
                Exportar <FaArrowRight size={12} />
              </button>
            </div>
          </div>
          )}
        </main>
      </div>
    </div>
  );
}
