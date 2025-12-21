"use client";
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

const fomentoData = [
  { name: "2021", Fomento: 20000 },
  { name: "2022", Fomento: 35000 },
  { name: "2023", Fomento: 50000 },
];

const eventosData = [
  { name: "Eventos", value: 16 },
  { name: "Projetos", value: 8 },
  { name: "Motores", value: 8 },
  { name: "PIs", value: 10 },
];

const COLORS = ["#5a8a2a", "#82ca9d", "#8884d8", "#ffc658"];

export default function VisualizacaoGraficosPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#fafafa]">
      {/* Barra superior igual à de ver dados */}
      <nav className="bg-[#A3CE6F] h-20 flex items-center justify-between px-12 shrink-0">
        <Link href="/visualizacao_superuser/ver_dados">
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
            <BarChart data={negociosData}>
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
            <LineChart data={alunosData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="Alunos" stroke="#8884d8" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Gráfico de área - Fomento Captado */}
        <div className="bg-white rounded-xl shadow p-4">
          <h2 className="font-semibold mb-2 text-[#5a8a2a]">Fomento Captado por Ano (R$)</h2>
          <ResponsiveContainer width="100%" height={250}>
            <AreaChart data={fomentoData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Area type="monotone" dataKey="Fomento" stroke="#ffc658" fill="#ffc658" />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Gráfico de pizza - Distribuição de Eventos/Projetos/Motores/PIs */}
        <div className="bg-white rounded-xl shadow p-4 flex flex-col items-center">
          <h2 className="font-semibold mb-2 text-[#5a8a2a]">Distribuição de Tipos</h2>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={eventosData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={80}
                label
              >
                {eventosData.map((entry, index) => (
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