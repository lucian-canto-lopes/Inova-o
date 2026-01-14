"use client";
import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaArrowLeft, FaPlus } from "react-icons/fa";
import { 
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
  BarChart, Bar, AreaChart, Area, PieChart, Pie, Cell, RadarChart, Radar, 
  PolarGrid, PolarAngleAxis, PolarRadiusAxis, RadialBarChart, RadialBar,
  ScatterChart, Scatter, Treemap, Legend, ComposedChart, Funnel, FunnelChart,
  LabelList
} from "recharts";
import { buildChartData, ChartDatum, ChartFilters, ReportDetalhes } from "@/src/lib/reportCharts";

const COLORS = ["#6366f1", "#818cf8", "#a5b4fc", "#c7d2fe"];
const ALLOWED_CHARTS = new Set(["bar-chart", "line-chart", "area-chart", "pie-chart"]);

type FormField = {
  id: string;
  label: string;
  value: string;
  options?: string[];
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

export default function IndicadorPersonalizavelPage() {
  const router = useRouter();
  const [fields, setFields] = useState<FormField[]>([
    { id: "fonte", label: "Fonte", value: "", options: [] },
    { id: "ano", label: "Ano", value: "", options: [] },
    { id: "semestre", label: "Semestre", value: "", options: ["1o Semestre", "2o Semestre", "Anual"] },
    { id: "disciplina", label: "Disciplina", value: "", options: [] },
    { id: "curso", label: "Curso", value: "", options: [] },
  ]);

  const [selectedChart, setSelectedChart] = useState<string | null>(null);
  const [sourceData, setSourceData] = useState<ReportDetalhes | null>(null);

  const buildOptions = (values: string[], prefix?: string[]) => {
    const unique = Array.from(new Set(values.filter(Boolean)));
    unique.sort((a, b) => a.localeCompare(b));
    return prefix ? [...prefix, ...unique] : unique;
  };

  const extractYearFromSemestre = (value?: string) => {
    const match = String(value ?? "").match(/\d{4}/);
    return match ? match[0] : "";
  };

  const extractYearFromDate = (value?: string) => {
    if (!value) return "";
    const date = new Date(value);
    if (Number.isNaN(date.getTime())) return "";
    return String(date.getFullYear());
  };

  const normalizeValue = (value: string) =>
    value
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .trim();

  const isAllOption = (value: string) => value === "todos" || value === "todas";

  const selectedFonteKey = useMemo(() => {
    const fonteValue = fields.find((field) => field.id === "fonte")?.value ?? "";
    return normalizeValue(fonteValue);
  }, [fields]);

  const selectedCursoKey = useMemo(() => {
    const cursoValue = fields.find((field) => field.id === "curso")?.value ?? "";
    return normalizeValue(cursoValue);
  }, [fields]);

  const filtersKey = `${selectedFonteKey}|${selectedCursoKey}`;

  const filtersMap = useMemo<ChartFilters>(() => {
    return fields.reduce((acc, f) => ({ ...acc, [f.id]: f.value }), {} as ChartFilters);
  }, [fields]);

  const chartData = useMemo<ChartDatum[]>(() => buildChartData(filtersMap, sourceData), [
    filtersMap,
    sourceData,
  ]);

  useEffect(() => {
    const savedChart = localStorage.getItem("selectedChart");
    if (savedChart && ALLOWED_CHARTS.has(savedChart)) {
      setSelectedChart(savedChart);
    } else {
      if (savedChart) {
        localStorage.removeItem("selectedChart");
      }
      try {
        const savedCharts = JSON.parse(localStorage.getItem("selectedCharts") || "[]");
        if (Array.isArray(savedCharts) && savedCharts.length > 0) {
          const allowedCharts = savedCharts.filter((chart) => ALLOWED_CHARTS.has(chart));
          if (allowedCharts.length > 0) {
            setSelectedChart(allowedCharts[allowedCharts.length - 1]);
          } else {
            localStorage.removeItem("selectedCharts");
          }
        }
      } catch (error) {
        console.error("Erro ao ler selectedCharts:", error);
      }
    }

    const loadData = async () => {
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

    loadData();
  }, []);

  useEffect(() => {
    if (!sourceData) return;

    const includeDisciplinas = !selectedFonteKey || selectedFonteKey.includes("disc");
    const includeEventos = selectedFonteKey.includes("event");
    const includeNegocios = selectedFonteKey.includes("nego");
    const includeProjetos = selectedFonteKey.includes("proj");

    const hasCursoFilter = selectedCursoKey && !isAllOption(selectedCursoKey);
    const disciplinaValues = includeDisciplinas
      ? hasCursoFilter
        ? (sourceData.cursos ?? [])
            .filter((curso) => normalizeValue(curso.nome).includes(selectedCursoKey))
            .flatMap((curso) => curso.disciplinas ?? [])
            .map((disciplina) => disciplina.nome)
        : sourceData.disciplinas.map((disciplina) => disciplina.nome)
      : [];
    const disciplinaOptions = includeDisciplinas
      ? buildOptions(disciplinaValues, ["Todas"])
      : [];
    const cursoOptions = includeDisciplinas
      ? buildOptions(
          (sourceData.cursos ?? []).map((curso) => curso.nome),
          ["Todos"]
        )
      : [];

    const yearValues = new Set<string>();
    if (includeDisciplinas) {
      for (const disciplina of sourceData.disciplinas) {
        const year = extractYearFromSemestre(disciplina.semestre);
        if (year) yearValues.add(year);
      }
    }
    if (includeEventos) {
      for (const evento of sourceData.eventos) {
        const year = extractYearFromDate(evento.data_inicio);
        if (year) yearValues.add(year);
      }
    }
    if (includeNegocios) {
      for (const negocio of sourceData.negocios) {
        const year = extractYearFromDate(negocio.data_criacao);
        if (year) yearValues.add(year);
      }
    }
    if (includeProjetos) {
      for (const motor of sourceData.motores) {
        if (Array.isArray(motor.projetos)) {
          for (const projeto of motor.projetos) {
            if (projeto && typeof projeto === "object") {
              const p = projeto as { data_criacao?: string; prazo?: string };
              const projectYear = extractYearFromDate(p.data_criacao || p.prazo);
              if (projectYear) yearValues.add(projectYear);
            }
          }
        }
      }
    }

    const anoOptions = Array.from(yearValues).sort((a, b) => Number(b) - Number(a));

    const fonteOptions: string[] = [];
    if (sourceData.disciplinas.length > 0) fonteOptions.push("Disciplinas");
    if (sourceData.eventos.length > 0) fonteOptions.push("Eventos");
    if (sourceData.negocios.length > 0) fonteOptions.push("Negocios");
    const hasProjetos = sourceData.motores.some(
      (motor) => Array.isArray(motor.projetos) && motor.projetos.length > 0
    );
    if (hasProjetos) fonteOptions.push("Projetos");

    setFields((prev) =>
      prev.map((field) => {
        const options =
          field.id === "fonte"
            ? fonteOptions
            : field.id === "ano"
              ? anoOptions
              : field.id === "disciplina"
                ? disciplinaOptions
                : field.id === "curso"
                  ? cursoOptions
                  : field.options;
        const safeValue =
          options && field.value && !options.includes(field.value) ? "" : field.value;
        return { ...field, value: safeValue, options };
      })
    );
  }, [sourceData, filtersKey]);

  const handleFieldChange = (id: string, value: string) => {
    setFields(prev => prev.map(f => f.id === id ? { ...f, value } : f));
  };

  const handleSave = () => {
    if (!selectedChart || !ALLOWED_CHARTS.has(selectedChart)) {
      alert("Por favor, selecione um grafico valido.");
      return;
    }

    // Criar objeto do grafico customizado
    const customChart: CustomChart = {
      id: `custom-${Date.now()}`,
      chartType: selectedChart,
      filters: filtersMap,
      createdAt: new Date().toISOString(),
    };
    // Salvar no localStorage para uso no relatório
    const savedCustomCharts = JSON.parse(localStorage.getItem("customReportCharts") || "[]");
    savedCustomCharts.push(customChart);
    localStorage.setItem("customReportCharts", JSON.stringify(savedCustomCharts));

    // Limpar gráficos selecionados
    localStorage.removeItem("selectedCharts");
    localStorage.removeItem("selectedChart");

    alert("Gráfico adicionado ao relatório com sucesso!");
    router.push("/dimensoes/visualizacao_superuser/relatorios");
  };

  const handleReload = () => {
    // Limpar gráficos selecionados e resetar a página
    localStorage.removeItem("selectedCharts");
    localStorage.removeItem("selectedChart");
    setSelectedChart(null);
  };

  const isFonteDisciplinas = !selectedFonteKey || selectedFonteKey.includes("disc");

  return (
    <div className="min-h-screen flex flex-col bg-[#E8E8E8]">
      {/* NavBar */}
      <nav className="bg-[#A3CE6F] h-16 flex items-center justify-between px-8 shrink-0">
        <Link href="/dimensoes/visualizacao_superuser/relatorios" className="text-white hover:text-white/80 transition">
          <FaArrowLeft className="w-6 h-6" />
        </Link>
        <h1 className="text-white text-2xl font-semibold">Pré-visualização</h1>
        <button onClick={handleReload} className="text-white hover:text-white/80 transition">
          <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
            <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z" />
          </svg>
        </button>
      </nav>

      {/* Conteúdo */}
      <div className="flex flex-1">
        {/* Sidebar de personalização */}
        <aside className="w-64 bg-[#4C7F16] text-white p-6 shrink-0 flex flex-col">
          <h2 className="text-lg font-semibold mb-6">Personalizar</h2>
          
          <div className="space-y-4 flex-1">
            {fields.map((field) => {
              const options = field.options ?? [];
              const disableByFonte =
                (field.id === "disciplina" || field.id === "curso") && !isFonteDisciplinas;
              const shouldDisable = disableByFonte || (field.id !== "semestre" && options.length === 0);
              return (
                <div key={field.id}>
                  <select
                    value={field.value}
                    onChange={(e) => handleFieldChange(field.id, e.target.value)}
                    disabled={shouldDisable}
                    className={`w-full px-3 py-2 rounded bg-white text-gray-800 text-sm border-0 outline-none ${
                      shouldDisable ? "opacity-60 cursor-not-allowed" : "cursor-pointer"
                    }`}
                  >
                    <option value="">{field.label}</option>
                    {options.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>
              );
            })}
          </div>
          <button 
            onClick={handleSave}
            className="mt-auto bg-[#3d6812] hover:bg-[#2d5010] px-6 py-2 rounded text-sm transition w-full"
          >
            Salvar
          </button>
        </aside>

        {/* Área de pré-visualização */}
        <main className="flex-1 p-8 overflow-auto flex items-center justify-center">
          {!selectedChart ? (
            /* Botão adicionar gráfico - mostrar apenas quando não há gráficos */
            <Link 
              href="/dimensoes/visualizacao_superuser/relatorios/indicador_personalizavel/graficos"
              className="bg-white rounded-lg shadow-lg p-8 flex flex-col items-center justify-center cursor-pointer hover:shadow-xl transition min-w-[200px] min-h-[200px]"
            >
              <div className="w-20 h-20 rounded-full border-4 border-[#4C7F16] flex items-center justify-center mb-4">
                <FaPlus className="w-8 h-8 text-[#4C7F16]" />
              </div>
              <p className="text-gray-700 font-medium">Adicionar Gráfico</p>
            </Link>
          ) : (
            /* Gráfico exibido */
            <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-2xl">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-sm text-gray-600">Pré-visualização do gráfico</span>
                <span className="text-sm text-blue-500">{selectedChart}</span>
              </div>
              
              <ResponsiveContainer width="100%" height={300}>
                {selectedChart && renderChart(selectedChart, chartData)}
              </ResponsiveContainer>
            </div>
          )}
        </main>
      </div>
    </div>
  );

  function renderChart(chartType: string, data: ChartDatum[]) {
    const maxValue = data.length > 0 ? Math.max(...data.map((item) => item.value)) : 0;
    const radarData = data.map((item) => ({
      subject: item.name,
      A: item.value,
      fullMark: maxValue || 1,
    }));
    const radialData = data.map((item, index) => ({
      name: item.name,
      value: item.value,
      fill: COLORS[index % COLORS.length],
    }));
    const treemapData = data.map((item, index) => ({
      name: item.name,
      size: item.value,
      fill: COLORS[index % COLORS.length],
    }));
    const scatterData = data.map((item, index) => ({
      x: index + 1,
      y: item.value,
      name: item.name,
    }));
    const funnelData = data.map((item, index) => ({
      value: item.value,
      name: item.name,
      fill: COLORS[index % COLORS.length],
    }));

    switch (chartType) {
      case "bar-chart":
      case "stacked-bar":
        return (
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
            <XAxis dataKey="name" tick={{ fontSize: 12 }} stroke="#999" />
            <YAxis tick={{ fontSize: 12 }} stroke="#999" />
            <Tooltip />
            <Bar dataKey="value" fill="#6366f1" />
          </BarChart>
        );

      case "line-chart":
        return (
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
            <XAxis dataKey="name" tick={{ fontSize: 12 }} stroke="#999" />
            <YAxis tick={{ fontSize: 12 }} stroke="#999" />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="value"
              stroke="#6366f1"
              strokeWidth={2}
              dot={{ fill: "#6366f1", strokeWidth: 2, r: 5 }}
              activeDot={{ r: 8, fill: "#4f46e5" }}
            />
          </LineChart>
        );

      case "area-chart":
        return (
          <AreaChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
            <XAxis dataKey="name" tick={{ fontSize: 12 }} stroke="#999" />
            <YAxis tick={{ fontSize: 12 }} stroke="#999" />
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
              outerRadius={100}
              dataKey="value"
              label={({ name, percent }) => `${name} ${((percent || 0) * 100).toFixed(0)}%`}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
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
              innerRadius={60}
              outerRadius={100}
              dataKey="value"
              label={({ name, percent }) => `${name} ${((percent || 0) * 100).toFixed(0)}%`}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        );

      case "radar-chart":
        return (
          <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarData}>
            <PolarGrid />
            <PolarAngleAxis dataKey="subject" tick={{ fontSize: 11 }} />
            <PolarRadiusAxis angle={30} domain={[0, maxValue || 1]} />
            <Radar name="Desempenho" dataKey="A" stroke="#6366f1" fill="#6366f1" fillOpacity={0.5} />
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
              label={{ position: "insideStart", fill: "#fff", fontSize: 11 }}
              background
              dataKey="value"
            />
            <Legend iconSize={10} layout="vertical" verticalAlign="middle" align="right" />
            <Tooltip />
          </RadialBarChart>
        );

      case "scatter-chart":
        return (
          <ScatterChart>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis type="number" dataKey="x" name="X" tick={{ fontSize: 11 }} />
            <YAxis type="number" dataKey="y" name="Y" tick={{ fontSize: 11 }} />
            <Tooltip cursor={{ strokeDasharray: "3 3" }} />
            <Scatter name="Dados" data={scatterData} fill="#6366f1" />
          </ScatterChart>
        );

      case "composed-chart":
        return (
          <ComposedChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" tick={{ fontSize: 11 }} />
            <YAxis tick={{ fontSize: 11 }} />
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
              <LabelList position="center" fill="#fff" stroke="none" dataKey="name" fontSize={11} />
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
            <XAxis dataKey="name" tick={{ fontSize: 12 }} stroke="#999" />
            <YAxis tick={{ fontSize: 12 }} stroke="#999" />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="value"
              stroke="#6366f1"
              strokeWidth={2}
              dot={{ fill: "#6366f1", strokeWidth: 2, r: 5 }}
            />
          </LineChart>
        );
    }
  }
}
