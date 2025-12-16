"use client";
import { useState, useEffect } from "react";
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

// Dados de exemplo para os gráficos
const sampleData = [
  { name: "Jan", value: 30 },
  { name: "Fev", value: 45 },
  { name: "Mar", value: 28 },
  { name: "Abr", value: 80 },
  { name: "Mai", value: 99 },
  { name: "Jun", value: 43 },
  { name: "Jul", value: 50 },
  { name: "Ago", value: 35 },
];

const pieData = [
  { name: "Grupo A", value: 400 },
  { name: "Grupo B", value: 300 },
  { name: "Grupo C", value: 200 },
  { name: "Grupo D", value: 100 },
];

const radarData = [
  { subject: "Inovação", A: 120, fullMark: 150 },
  { subject: "Ensino", A: 98, fullMark: 150 },
  { subject: "Pesquisa", A: 86, fullMark: 150 },
  { subject: "Extensão", A: 99, fullMark: 150 },
  { subject: "Gestão", A: 85, fullMark: 150 },
  { subject: "Parcerias", A: 65, fullMark: 150 },
];

const radialData = [
  { name: "18-24", value: 31.47, fill: "#6366f1" },
  { name: "25-29", value: 26.69, fill: "#818cf8" },
  { name: "30-34", value: 15.69, fill: "#a5b4fc" },
];

const scatterData = [
  { x: 100, y: 200, z: 200 },
  { x: 120, y: 100, z: 260 },
  { x: 170, y: 300, z: 400 },
  { x: 140, y: 250, z: 280 },
  { x: 150, y: 400, z: 500 },
  { x: 110, y: 280, z: 200 },
];

const treemapData = [
  { name: "Projetos", size: 2400, fill: "#6366f1" },
  { name: "Disciplinas", size: 1800, fill: "#818cf8" },
  { name: "Eventos", size: 1200, fill: "#a5b4fc" },
  { name: "Negócios", size: 800, fill: "#c7d2fe" },
];

const funnelData = [
  { value: 100, name: "Visitantes", fill: "#6366f1" },
  { value: 80, name: "Interessados", fill: "#818cf8" },
  { value: 50, name: "Inscritos", fill: "#a5b4fc" },
  { value: 30, name: "Participantes", fill: "#c7d2fe" },
];

const COLORS = ["#6366f1", "#818cf8", "#a5b4fc", "#c7d2fe"];

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

export default function IndicadorPersonalizavelPage() {
  const router = useRouter();
  const [fields, setFields] = useState<FormField[]>([
    { id: "tipo", label: "Tipo", value: "", options: ["Linha", "Barra", "Pizza", "Área"] },
    { id: "fonte", label: "Fonte", value: "", options: ["Disciplinas", "Projetos", "Negócios", "Eventos"] },
    { id: "ano", label: "Ano", value: "", options: ["2023", "2024", "2025"] },
    { id: "semestre", label: "Semestre", value: "", options: ["1º Semestre", "2º Semestre", "Anual"] },
    { id: "disciplina", label: "Disciplina", value: "", options: ["Todas", "Inovação", "Empreendedorismo", "Gestão"] },
    { id: "curso", label: "Curso", value: "", options: ["Todos", "BCC", "Engenharia", "Administração"] },
  ]);

  const [charts, setCharts] = useState<string[]>([]);

  useEffect(() => {
    // Carregar gráficos salvos do localStorage
    const savedCharts = JSON.parse(localStorage.getItem("selectedCharts") || "[]");
    setCharts(savedCharts);
  }, []);

  const handleFieldChange = (id: string, value: string) => {
    setFields(prev => prev.map(f => f.id === id ? { ...f, value } : f));
  };

  const handleSave = () => {
    if (charts.length === 0) {
      alert("Por favor, selecione um gráfico primeiro.");
      return;
    }

    // Criar objeto do gráfico customizado
    const customChart: CustomChart = {
      id: `custom-${Date.now()}`,
      chartType: charts[charts.length - 1],
      filters: fields.reduce((acc, f) => ({ ...acc, [f.id]: f.value }), {}),
      createdAt: new Date().toISOString(),
    };

    // Salvar no localStorage para uso no relatório
    const savedCustomCharts = JSON.parse(localStorage.getItem("customReportCharts") || "[]");
    savedCustomCharts.push(customChart);
    localStorage.setItem("customReportCharts", JSON.stringify(savedCustomCharts));

    // Limpar gráficos selecionados
    localStorage.removeItem("selectedCharts");

    alert("Gráfico adicionado ao relatório com sucesso!");
    router.push("/visualizacao_superuser/relatorios");
  };

  const handleReload = () => {
    // Limpar gráficos selecionados e resetar a página
    localStorage.removeItem("selectedCharts");
    setCharts([]);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#E8E8E8]">
      {/* NavBar */}
      <nav className="bg-[#A3CE6F] h-16 flex items-center justify-between px-8 shrink-0">
        <Link href="/visualizacao_superuser/relatorios" className="text-white hover:text-white/80 transition">
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
            {fields.map((field) => (
              <div key={field.id}>
                <select
                  value={field.value}
                  onChange={(e) => handleFieldChange(field.id, e.target.value)}
                  className="w-full px-3 py-2 rounded bg-white text-gray-800 text-sm border-0 outline-none cursor-pointer"
                >
                  <option value="">{field.label}</option>
                  {field.options?.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>
            ))}
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
          {charts.length === 0 ? (
            /* Botão adicionar gráfico - mostrar apenas quando não há gráficos */
            <Link 
              href="/visualizacao_superuser/relatorios/indicador_personalizavel/graficos"
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
                <span className="text-sm text-blue-500">{charts[charts.length - 1]}</span>
              </div>
              
              <ResponsiveContainer width="100%" height={300}>
                {renderChart(charts[charts.length - 1])}
              </ResponsiveContainer>
            </div>
          )}
        </main>
      </div>
    </div>
  );

  function renderChart(chartType: string) {
    switch (chartType) {
      case "bar-chart":
      case "stacked-bar":
        return (
          <BarChart data={sampleData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
            <XAxis dataKey="name" tick={{ fontSize: 12 }} stroke="#999" />
            <YAxis tick={{ fontSize: 12 }} stroke="#999" />
            <Tooltip />
            <Bar dataKey="value" fill="#6366f1" />
          </BarChart>
        );
      
      case "line-chart":
        return (
          <LineChart data={sampleData}>
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
          <AreaChart data={sampleData}>
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
              data={pieData}
              cx="50%"
              cy="50%"
              outerRadius={100}
              dataKey="value"
              label={({ name, percent }) => `${name} ${((percent || 0) * 100).toFixed(0)}%`}
            >
              {pieData.map((entry, index) => (
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
              data={pieData}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={100}
              dataKey="value"
              label={({ name, percent }) => `${name} ${((percent || 0) * 100).toFixed(0)}%`}
            >
              {pieData.map((entry, index) => (
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
            <PolarRadiusAxis angle={30} domain={[0, 150]} />
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
          <ComposedChart data={sampleData}>
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
          <LineChart data={sampleData}>
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
