"use client";
import { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell, AreaChart, Area } from "recharts";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

const negociosData = [
  { name: "2021", Negócios: 12 },
  { name: "2022", Negócios: 20 },
  { name: "2023", Negócios: 18 },
];

const alunosData = [
  { name: "2021", Alunos: 40 },
  { name: "2022", Alunos: 60 },
  { name: "2023", Alunos: 80 },
];

type ChartPoint = {
  name: string;
  [key: string]: number | string;
};

type ApiResponse = {
  detalhes: {
    negocios: Array<{
      nome: string;
      data_criacao: string;
      faturamento_anual: number;
    }>;
    disciplinas: Array<{
      semestre: string;
      alunos_matriculados: number;
    }>;
    cursos: Array<{
      nome: string;
      fomento: Array<{ date?: string; valor?: string | number }> | null;
    }>;
  };
};

const COLORS = ["#5a8a2a", "#82ca9d", "#8884d8", "#ffc658"];
const NEGOCIOS_KEY = Object.keys(negociosData[0] || {}).find((key) => key !== "name") || "Negocios";
const ALUNOS_KEY = Object.keys(alunosData[0] || {}).find((key) => key !== "name") || "Alunos";
const FOMENTO_KEY = "Fomento";

export default function VisualizacaoGraficosPage() {
  const [negociosChartData, setNegociosChartData] = useState<ChartPoint[]>([]);
  const [alunosChartData, setAlunosChartData] = useState<ChartPoint[]>([]);
  const [fomentoChartData, setFomentoChartData] = useState<ChartPoint[]>([]);
  const [faturamentoChartData, setFaturamentoChartData] = useState<ChartPoint[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const carregarDados = async () => {
      setIsLoading(true);
      try {
        const response = await fetch("/api/visualizacao_superuser/ver_dados");
        if (!response.ok) {
          throw new Error("Falha ao carregar dados.");
        }
        const data: ApiResponse = await response.json();

        const negociosPorAno = new Map<string, number>();
        data.detalhes.negocios.forEach((negocio) => {
          const dataCriacao = new Date(negocio.data_criacao);
          if (isNaN(dataCriacao.getTime())) return;
          const ano = String(dataCriacao.getFullYear());
          negociosPorAno.set(ano, (negociosPorAno.get(ano) || 0) + 1);
        });
        const negociosSerie: ChartPoint[] = Array.from(negociosPorAno.entries())
          .sort((a, b) => Number(a[0]) - Number(b[0]))
          .map(([ano, total]) => ({ name: ano, [NEGOCIOS_KEY]: total }));
        setNegociosChartData(negociosSerie);

        const faturamentoSerie: ChartPoint[] = data.detalhes.negocios
          .filter((negocio) => String(negocio.nome || "").trim() !== "")
          .map((negocio) => ({ name: negocio.nome, value: Number(negocio.faturamento_anual) || 0 }))
          .sort((a, b) => Number(b.value) - Number(a.value));
        setFaturamentoChartData(faturamentoSerie);

        const alunosPorAno = new Map<string, number>();
        data.detalhes.disciplinas.forEach((disciplina) => {
          const match = String(disciplina.semestre || "").match(/\d{4}/);
          if (!match) return;
          const ano = match[0];
          alunosPorAno.set(ano, (alunosPorAno.get(ano) || 0) + (disciplina.alunos_matriculados || 0));
        });
        const alunosSerie: ChartPoint[] = Array.from(alunosPorAno.entries())
          .sort((a, b) => Number(a[0]) - Number(b[0]))
          .map(([ano, total]) => ({ name: ano, [ALUNOS_KEY]: total }));
        setAlunosChartData(alunosSerie);

        const fomentoSerie: ChartPoint[] = data.detalhes.cursos
          .filter((curso) => String(curso.nome || "").trim() !== "")
          .map((curso) => {
            // fomento é um array JSON de { date, valor }
            let fomentoTotal = 0;
            if (curso.fomento && Array.isArray(curso.fomento)) {
              fomentoTotal = curso.fomento.reduce(
                (s, f) => s + Number(String(f.valor ?? 0).replace(",", ".")),
                0
              );
            }
            return { name: curso.nome, [FOMENTO_KEY]: fomentoTotal };
          })
          .filter((item) => Number(item[FOMENTO_KEY]) > 0)
          .sort((a, b) => Number(b[FOMENTO_KEY]) - Number(a[FOMENTO_KEY]));
        setFomentoChartData(fomentoSerie);
      } catch (error) {
        setNegociosChartData([]);
        setAlunosChartData([]);
        setFomentoChartData([]);
        setFaturamentoChartData([]);
      } finally {
        setIsLoading(false);
      }
    };

    carregarDados();
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#fafafa]">
      {/* Barra superior igual à de ver dados */}
      <nav className="bg-[#A3CE6F] h-20 flex items-center justify-between px-12 shrink-0">
        <Link href="/dimensoes/visualizacao_superuser/ver_dados">
          <FaArrowLeft className="w-10 h-10 text-white cursor-pointer" />
        </Link>
        <h1 className="text-white text-3xl font-bold">Visualização de Gráficos</h1>
        <div className="w-10 h-10" /> {/* Espaço para alinhar o título centralizado */}
      </nav>
      <div className="flex-1 px-8 py-8">
        <div className="grid grid-cols-2 gap-8">
        {/* Gráfico de barras - Negócios Gerados */}
        <div className="bg-white rounded-xl shadow p-4">
          <h2 className="font-semibold mb-2 text-[#5a8a2a]">Negócios Gerados por Ano</h2>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={isLoading ? [] : negociosChartData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="Negócios" fill="#5a8a2a" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Gráfico de linha - Alunos Envolvidos */}
        <div className="bg-white rounded-xl shadow p-4">
          <h2 className="font-semibold mb-2 text-[#5a8a2a]">Alunos Envolvidos por Ano</h2>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={isLoading ? [] : alunosChartData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="Alunos" stroke="#8884d8" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Gráfico de barras - Fomento Captado */}
        <div className="bg-white rounded-xl shadow p-4">
          <h2 className="font-semibold mb-2 text-[#5a8a2a]">Fomento Captado por Cursos (R$)</h2>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={isLoading ? [] : fomentoChartData} margin={{ top: 20, right: 30, left: 20, bottom: 60 }}>
              <XAxis 
                dataKey="name" 
                tick={{ fontSize: 9, angle: -45, textAnchor: 'end' }} 
                height={60}
                interval={0}
              />
              <YAxis tickFormatter={(v) => `R$ ${(v/1000).toFixed(0)}k`} />
              <Tooltip formatter={(value: number) => [`R$ ${value.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`, 'Fomento']} />
              <Legend />
              <Bar dataKey={FOMENTO_KEY} name={FOMENTO_KEY} radius={[4, 4, 0, 0]}>
                {(isLoading ? [] : fomentoChartData).map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Gráfico de pizza - Faturamento por negocios */}
        <div className="bg-white rounded-xl shadow p-4 flex flex-col items-center">
          <h2 className="font-semibold mb-2 text-[#5a8a2a]">Faturamento por negocios</h2>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={isLoading ? [] : faturamentoChartData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={80}
                label
              >
                {(isLoading ? [] : faturamentoChartData).map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Legend />
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
      </div>
    </div>
  );
}
