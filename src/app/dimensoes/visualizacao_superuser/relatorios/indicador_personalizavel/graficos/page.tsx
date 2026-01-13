"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

type ChartOption = {
  id: string;
  name: string;
  type: "bar" | "line" | "pie" | "donut" | "progress" | "stat";
  preview: React.ReactNode;
};

export default function GraficosPage() {
  const router = useRouter();

  const chartOptions: ChartOption[] = [
    {
      id: "bar-chart",
      name: "Gráfico de Barras",
      type: "bar",
      preview: (
        <div className="w-full h-full flex flex-col p-2">
          <p className="text-[8px] text-gray-600 mb-1">Barras Verticais</p>
          <div className="flex-1 flex items-end justify-center gap-1">
            {["Jan", "Fev", "Mar", "Abr", "Mai", "Jun"].map((d, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="w-3 bg-[#6366f1]" style={{ height: `${25 + i * 8}px` }}></div>
                <span className="text-[5px] text-gray-400 mt-0.5">{d}</span>
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      id: "line-chart",
      name: "Gráfico de Linha",
      type: "line",
      preview: (
        <div className="w-full h-full flex flex-col p-2">
          <p className="text-[8px] text-gray-600 mb-1">Linha de Tendência</p>
          <div className="flex-1 flex items-end">
            <svg viewBox="0 0 100 40" className="w-full h-8">
              <polyline
                points="0,35 15,25 30,30 45,15 60,20 75,10 100,25"
                fill="none"
                stroke="#6366f1"
                strokeWidth="2"
              />
            </svg>
          </div>
        </div>
      ),
    },
    {
      id: "area-chart",
      name: "Gráfico de Área",
      type: "line",
      preview: (
        <div className="w-full h-full flex flex-col p-2">
          <p className="text-[8px] text-gray-600 mb-1">Área Preenchida</p>
          <div className="flex-1 flex items-end">
            <svg viewBox="0 0 100 40" className="w-full h-10">
              <defs>
                <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#6366f1" stopOpacity="0.4"/>
                  <stop offset="100%" stopColor="#6366f1" stopOpacity="0.1"/>
                </linearGradient>
              </defs>
              <polygon
                points="0,40 0,35 15,25 30,30 45,15 60,20 75,10 100,25 100,40"
                fill="url(#areaGradient)"
              />
              <polyline
                points="0,35 15,25 30,30 45,15 60,20 75,10 100,25"
                fill="none"
                stroke="#6366f1"
                strokeWidth="2"
              />
            </svg>
          </div>
        </div>
      ),
    },
    {
      id: "pie-chart",
      name: "Gráfico de Pizza",
      type: "pie",
      preview: (
        <div className="w-full h-full flex items-center justify-center p-2">
          <svg viewBox="0 0 40 40" className="w-16 h-16">
            <circle cx="20" cy="20" r="15" fill="#6366f1" />
            <path d="M20,20 L20,5 A15,15 0 0,1 35,20 Z" fill="#a5b4fc" />
            <path d="M20,20 L35,20 A15,15 0 0,1 20,35 Z" fill="#818cf8" />
          </svg>
        </div>
      ),
    },
    {
      id: "donut-chart",
      name: "Gráfico de Rosca",
      type: "donut",
      preview: (
        <div className="w-full h-full flex items-center justify-center">
          <div className="relative w-16 h-16">
            <svg viewBox="0 0 36 36" className="w-full h-full">
              <path
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="#e0e0e0"
                strokeWidth="3"
              />
              <path
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="#6366f1"
                strokeWidth="3"
                strokeDasharray="65, 100"
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-sm font-bold text-[#6366f1]">65%</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "radar-chart",
      name: "Gráfico Radar",
      type: "bar",
      preview: (
        <div className="w-full h-full flex items-center justify-center p-2">
          <svg viewBox="0 0 50 50" className="w-14 h-14">
            <polygon points="25,5 45,20 40,42 10,42 5,20" fill="none" stroke="#e0e0e0" strokeWidth="1" />
            <polygon points="25,12 38,22 35,38 15,38 12,22" fill="none" stroke="#e0e0e0" strokeWidth="1" />
            <polygon points="25,18 32,24 30,34 20,34 18,24" fill="#6366f1" fillOpacity="0.3" stroke="#6366f1" strokeWidth="1.5" />
          </svg>
        </div>
      ),
    },
    {
      id: "radialbar-chart",
      name: "Barra Radial",
      type: "donut",
      preview: (
        <div className="w-full h-full flex items-center justify-center">
          <div className="relative w-16 h-16">
            <svg viewBox="0 0 36 36" className="w-full h-full">
              <circle cx="18" cy="18" r="14" fill="none" stroke="#e0e0e0" strokeWidth="2" />
              <circle cx="18" cy="18" r="10" fill="none" stroke="#e0e0e0" strokeWidth="2" />
              <circle cx="18" cy="18" r="6" fill="none" stroke="#e0e0e0" strokeWidth="2" />
              <path d="M18 4 A14 14 0 1 1 5 22" fill="none" stroke="#6366f1" strokeWidth="2" />
              <path d="M18 8 A10 10 0 1 1 10 24" fill="none" stroke="#818cf8" strokeWidth="2" />
              <path d="M18 12 A6 6 0 1 1 14 22" fill="none" stroke="#a5b4fc" strokeWidth="2" />
            </svg>
          </div>
        </div>
      ),
    },
    {
      id: "composed-chart",
      name: "Gráfico Combinado",
      type: "bar",
      preview: (
        <div className="w-full h-full flex flex-col p-2">
          <p className="text-[8px] text-gray-600 mb-1">Barras + Linha</p>
          <div className="flex-1 relative">
            <div className="absolute bottom-0 left-0 right-0 flex items-end justify-center gap-1">
              {[30, 50, 40, 60, 45].map((h, i) => (
                <div key={i} className="w-3 bg-[#6366f1]" style={{ height: `${h}%` }}></div>
              ))}
            </div>
            <svg viewBox="0 0 100 40" className="w-full h-full absolute top-0 left-0">
              <polyline
                points="10,30 30,20 50,25 70,10 90,15"
                fill="none"
                stroke="#ef4444"
                strokeWidth="2"
              />
            </svg>
          </div>
        </div>
      ),
    },
    {
      id: "scatter-chart",
      name: "Gráfico de Dispersão",
      type: "line",
      preview: (
        <div className="w-full h-full flex flex-col p-2">
          <p className="text-[8px] text-gray-600 mb-1">Pontos Dispersos</p>
          <div className="flex-1 relative">
            <svg viewBox="0 0 100 60" className="w-full h-full">
              <circle cx="15" cy="45" r="3" fill="#6366f1" />
              <circle cx="25" cy="30" r="3" fill="#6366f1" />
              <circle cx="40" cy="35" r="3" fill="#6366f1" />
              <circle cx="55" cy="20" r="3" fill="#6366f1" />
              <circle cx="65" cy="25" r="3" fill="#6366f1" />
              <circle cx="80" cy="15" r="3" fill="#6366f1" />
              <circle cx="90" cy="10" r="3" fill="#6366f1" />
            </svg>
          </div>
        </div>
      ),
    },
    {
      id: "funnel-chart",
      name: "Gráfico de Funil",
      type: "bar",
      preview: (
        <div className="w-full h-full flex flex-col items-center justify-center p-2">
          <div className="w-full flex flex-col items-center gap-0.5">
            <div className="h-3 bg-[#6366f1] rounded-sm" style={{ width: "90%" }}></div>
            <div className="h-3 bg-[#818cf8] rounded-sm" style={{ width: "70%" }}></div>
            <div className="h-3 bg-[#a5b4fc] rounded-sm" style={{ width: "50%" }}></div>
            <div className="h-3 bg-[#c7d2fe] rounded-sm" style={{ width: "30%" }}></div>
          </div>
        </div>
      ),
    },
    {
      id: "treemap-chart",
      name: "Treemap",
      type: "bar",
      preview: (
        <div className="w-full h-full p-2">
          <div className="w-full h-full grid grid-cols-3 grid-rows-2 gap-0.5">
            <div className="bg-[#6366f1] rounded-sm col-span-2"></div>
            <div className="bg-[#818cf8] rounded-sm"></div>
            <div className="bg-[#a5b4fc] rounded-sm"></div>
            <div className="bg-[#c7d2fe] rounded-sm"></div>
            <div className="bg-[#e0e7ff] rounded-sm"></div>
          </div>
        </div>
      ),
    },
    {
      id: "stacked-bar",
      name: "Barras Empilhadas",
      type: "bar",
      preview: (
        <div className="w-full h-full flex flex-col p-2">
          <p className="text-[8px] text-gray-600 mb-1">Empilhado</p>
          <div className="flex-1 flex items-end justify-center gap-2">
            {[1, 2, 3, 4, 5].map((_, i) => (
              <div key={i} className="flex flex-col w-3">
                <div className="bg-[#6366f1]" style={{ height: `${15 + i * 5}px` }}></div>
                <div className="bg-[#a5b4fc]" style={{ height: `${10 + i * 3}px` }}></div>
              </div>
            ))}
          </div>
        </div>
      ),
    },
  ];

  const handleSelectChart = (chartId: string) => {
    // Salvar no localStorage e voltar imediatamente
    const savedCharts = JSON.parse(localStorage.getItem("selectedCharts") || "[]");
    savedCharts.push(chartId);
    localStorage.setItem("selectedCharts", JSON.stringify(savedCharts));
    router.push("/dimensoes/visualizacao_superuser/relatorios/indicador_personalizavel");
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#E8E8E8]">
      {/* NavBar */}
      <nav className="bg-[#A3CE6F] h-16 flex items-center px-8 shrink-0">
        <Link href="/dimensoes/visualizacao_superuser/relatorios/indicador_personalizavel" className="text-white hover:text-white/80 transition">
          <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
            <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
          </svg>
        </Link>
        <h1 className="text-white text-2xl font-semibold flex-1 text-center pr-8">Gráficos</h1>
      </nav>

      {/* Conteúdo */}
      <main className="flex-1 p-8 overflow-auto">
        <h2 className="text-lg font-semibold text-gray-800 mb-6">Selecione o tipo de gráfico:</h2>
        
        <div className="grid grid-cols-4 gap-4 max-w-4xl">
          {chartOptions.map((chart) => (
            <div
              key={chart.id}
              onClick={() => handleSelectChart(chart.id)}
              className="bg-white rounded-lg shadow cursor-pointer transition hover:shadow-lg hover:ring-2 hover:ring-[#4C7F16] aspect-square flex items-center justify-center"
            >
              {chart.preview}
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
