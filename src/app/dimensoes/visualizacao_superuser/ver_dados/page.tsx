"use client";

import { useEffect, useState } from "react";
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell
} from "recharts";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

type CardType = "alunos" | "negocios" | "disciplinas" | "fomento" | "eventos" | "capital" | "motores" | "publico_eventos" | null;

type ColumnFormat = "currency" | "date" | "list";
type CardColumn = {
  key: string;
  label: string;
  format?: ColumnFormat;
  chart?: boolean;
};

type CardDetalhe = {
  titulo: string;
  colunas: CardColumn[];
  dados: Record<string, any>[];
  labelKey?: string;
};

type ApiResponse = {
  metrics: {
    negociosGerados: number;
    disciplinasInovacao: number;
    fomentoCaptado: number;
    eventosRealizados: number;
    alunosEnvolvidos: number;
    capitalCaptado: number;
    motores: number;
    publicoEventos: number;
  };
  detalhes: {
    negocios: Array<{
      nome: string;
      area_atuacao: string;
      faturamento_anual: number;
      fundadores: string[];
      porte: string;
    }>;
    disciplinas: Array<{
      nome: string;
      coordenador: string;
      semestre: string;
      codigo: string;
      alunos_matriculados: number;
      alunos_aprovados: number;
    }>;
    eventos: Array<{
      nome: string;
      data_inicio: string;
      duracao: string;
      receita: number;
      qtd_publico: number;
    }>;
    motores: Array<{
      nome: string;
      motor_tipo: string;
      qtd_empresas_atendidas: number;
      faturamento: number;
    }>;
    cursos: Array<{
      nome: string;
      fomento: number;
      capital_captado: number;
    }>;
  };
};

export default function VerDadosPage() {
  const [filtros, setFiltros] = useState({
    tipo: "",
    fonte: "",
    ano: "",
    semestre: "",
    disciplina: "",
    curso: "",
  });

  const [cardSelecionado, setCardSelecionado] = useState<CardType>(null);
  const [showGraficoModal, setShowGraficoModal] = useState(false);
  const [tipoGrafico, setTipoGrafico] = useState<"barra" | "pizza" | "linha" | null>(null);
  const [metrics, setMetrics] = useState<ApiResponse["metrics"] | null>(null);
  const [dadosDetalhados, setDadosDetalhados] = useState<Record<string, CardDetalhe>>({});
  const [disciplinaOptions, setDisciplinaOptions] = useState<string[]>([]);
  const [semestreOptions, setSemestreOptions] = useState<string[]>([]);
  const [anoOptions, setAnoOptions] = useState<string[]>([]);
  const [cursoOptions, setCursoOptions] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [loadError, setLoadError] = useState<string | null>(null);

  useEffect(() => {
    const carregarDados = async () => {
      setIsLoading(true);
      setLoadError(null);
      try {
        const response = await fetch("/api/visualizacao_superuser/ver_dados");
        if (!response.ok) {
          throw new Error("Falha ao carregar dados.");
        }
        const data: ApiResponse = await response.json();
        setMetrics(data.metrics);
        const cursosDisponiveis = Array.from(
          new Set(
            data.detalhes.cursos
              .map((curso) => curso.nome)
              .filter((nome) => nome)
          )
        ).sort((a, b) => a.localeCompare(b, "pt-BR"));
        setCursoOptions(cursosDisponiveis);
        const disciplinasDisponiveis = Array.from(
          new Set(
            data.detalhes.disciplinas
              .map((disciplina) => disciplina.nome)
              .filter((nome) => nome)
          )
        ).sort((a, b) => a.localeCompare(b, "pt-BR"));
        setDisciplinaOptions(disciplinasDisponiveis);
        const semestresDisponiveis = Array.from(
          new Set(
            data.detalhes.disciplinas
              .map((disciplina) => disciplina.semestre)
              .filter((semestre) => semestre)
          )
        ).sort((a, b) => a.localeCompare(b, "pt-BR", { numeric: true }));
        setSemestreOptions(semestresDisponiveis);
        const anos = new Set<string>();
        data.detalhes.disciplinas.forEach((disciplina) => {
          const match = disciplina.semestre?.match(/\d{4}/);
          if (match) anos.add(match[0]);
        });
        data.detalhes.eventos.forEach((evento) => {
          const dataInicio = new Date(evento.data_inicio);
          if (!isNaN(dataInicio.getTime())) anos.add(String(dataInicio.getFullYear()));
        });
        const anosOrdenados = Array.from(anos).sort((a, b) => Number(b) - Number(a));
        setAnoOptions(anosOrdenados);

        const detalhes: Record<string, CardDetalhe> = {
          negocios: {
            titulo: "Negocios Gerados",
            labelKey: "nome",
            colunas: [
              { key: "nome", label: "Nome do Negocio" },
              { key: "fundadores", label: "Fundadores", format: "list" },
              { key: "area_atuacao", label: "Area" },
              { key: "faturamento_anual", label: "Faturamento Anual", format: "currency", chart: true },
              { key: "porte", label: "Porte" },
            ],
            dados: data.detalhes.negocios,
          },
          disciplinas: {
            titulo: "Disciplinas de Inovacao",
            labelKey: "nome",
            colunas: [
              { key: "nome", label: "Nome da Disciplina" },
              { key: "coordenador", label: "Professor" },
              { key: "semestre", label: "Semestre" },
              { key: "alunos_matriculados", label: "Alunos Matriculados", chart: true },
              { key: "alunos_aprovados", label: "Alunos Aprovados", chart: true },
            ],
            dados: data.detalhes.disciplinas,
          },
          fomento: {
            titulo: "Fomento Captado (Cursos)",
            labelKey: "nome",
            colunas: [
              { key: "nome", label: "Curso" },
              { key: "fomento", label: "Fomento", format: "currency", chart: true },
            ],
            dados: data.detalhes.cursos,
          },
          eventos: {
            titulo: "Eventos Realizados",
            labelKey: "nome",
            colunas: [
              { key: "nome", label: "Nome do Evento" },
              { key: "data_inicio", label: "Data", format: "date" },
              { key: "duracao", label: "Duracao" },
              { key: "qtd_publico", label: "Publico", chart: true },
              { key: "receita", label: "Receita", format: "currency", chart: true },
            ],
            dados: data.detalhes.eventos,
          },
          alunos: {
            titulo: "Alunos em Disciplinas",
            labelKey: "nome",
            colunas: [
              { key: "nome", label: "Disciplina" },
              { key: "alunos_matriculados", label: "Alunos Matriculados", chart: true },
            ],
            dados: data.detalhes.disciplinas,
          },
          capital: {
            titulo: "Capital Captado (Cursos)",
            labelKey: "nome",
            colunas: [
              { key: "nome", label: "Curso" },
              { key: "capital_captado", label: "Capital Captado", format: "currency", chart: true },
            ],
            dados: data.detalhes.cursos,
          },
          motores: {
            titulo: "Motores de Inovacao",
            labelKey: "nome",
            colunas: [
              { key: "nome", label: "Nome" },
              { key: "motor_tipo", label: "Tipo" },
              { key: "qtd_empresas_atendidas", label: "Empresas Atendidas", chart: true },
              { key: "faturamento", label: "Faturamento", format: "currency", chart: true },
            ],
            dados: data.detalhes.motores,
          },
          publico_eventos: {
            titulo: "Quantidade de Publico em Eventos",
            labelKey: "nome",
            colunas: [
              { key: "nome", label: "Evento" },
              { key: "qtd_publico", label: "Publico", chart: true },
            ],
            dados: data.detalhes.eventos,
          },
        };

        setDadosDetalhados(detalhes);
      } catch (error) {
        console.error("Erro ao carregar dados:", error);
        setLoadError("Nao foi possivel carregar os dados.");
      } finally {
        setIsLoading(false);
      }
    };

    carregarDados();
  }, []);

  const handleFiltroChange = (campo: string, valor: string) => {
    setFiltros((prev) => ({ ...prev, [campo]: valor }));
  };

  const formatarMoeda = (valor: number) => {
    return Number(valor || 0).toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  };

  const formatarData = (valor: string) => {
    if (!valor) return "-";
    const data = new Date(valor);
    if (isNaN(data.getTime())) return "-";
    return data.toLocaleDateString("pt-BR");
  };

  const formatarValor = (valor: any, coluna: CardColumn) => {
    if (valor === null || valor === undefined) return "-";
    if (coluna.format === "currency") return formatarMoeda(Number(valor));
    if (coluna.format === "date") return formatarData(String(valor));
    if (coluna.format === "list") {
      return Array.isArray(valor) ? valor.join(", ") : String(valor);
    }
    return String(valor);
  };

  const normalizarTexto = (valor: any) => {
    return String(valor ?? "").trim().toLowerCase();
  };

  const matchTexto = (valor: any, filtro: string) => {
    return normalizarTexto(valor).includes(normalizarTexto(filtro));
  };

  const extrairAnoSemestre = (semestre: string) => {
    const match = String(semestre || "").match(/\d{4}/);
    return match ? match[0] : "";
  };

  const extrairAnoData = (dataValor: string) => {
    if (!dataValor) return "";
    const data = new Date(dataValor);
    if (isNaN(data.getTime())) return "";
    return String(data.getFullYear());
  };

  const aplicarFiltros = (dados: Record<string, any>[], cardTipo: CardType) => {
    if (!cardTipo) return dados;
    return dados.filter((linha) => {
      if (filtros.curso && (cardTipo === "fomento" || cardTipo === "capital")) {
        if (!matchTexto(linha.nome, filtros.curso)) return false;
      }
      if (filtros.disciplina && (cardTipo === "disciplinas" || cardTipo === "alunos")) {
        if (!matchTexto(linha.nome, filtros.disciplina)) return false;
      }
      if (filtros.semestre && (cardTipo === "disciplinas" || cardTipo === "alunos")) {
        if (!matchTexto(linha.semestre, filtros.semestre)) return false;
      }
      if (filtros.ano) {
        if (cardTipo === "eventos" || cardTipo === "publico_eventos") {
          const anoEvento = extrairAnoData(linha.data_inicio);
          if (anoEvento && anoEvento !== filtros.ano) return false;
        } else if (cardTipo === "disciplinas" || cardTipo === "alunos") {
          const anoSemestre = extrairAnoSemestre(linha.semestre);
          if (anoSemestre && anoSemestre !== filtros.ano) return false;
        }
      }
      if (filtros.tipo) {
        if (cardTipo === "motores") {
          if (!matchTexto(linha.motor_tipo, filtros.tipo)) return false;
        } else if (cardTipo === "negocios") {
          if (!matchTexto(linha.porte, filtros.tipo)) return false;
        } else if (cardTipo === "eventos" || cardTipo === "publico_eventos") {
          if (!matchTexto(linha.duracao, filtros.tipo)) return false;
        }
      }
      if (filtros.fonte) {
        const textoLinha = Object.values(linha)
          .map((valor) => (Array.isArray(valor) ? valor.join(" ") : String(valor ?? "")))
          .join(" ");
        if (!matchTexto(textoLinha, filtros.fonte)) return false;
      }
      return true;
    });
  };

  const handleCardClick = (tipo: CardType) => {
    setCardSelecionado(tipo);
  };

  const voltarParaCards = () => {
    setCardSelecionado(null);
  };

  const COLORS = ["#5a8a2a", "#82ca9d", "#8884d8", "#ffc658", "#e57373", "#ba68c8", "#ffd54f", "#4fc3f7"]; // para pizza

  const renderTabela = () => {
    if (!cardSelecionado) return null;
    if (isLoading) {
      return (
        <div className="w-full h-full flex items-center justify-center">
          <span className="text-gray-600">Carregando dados...</span>
        </div>
      );
    }
    if (loadError) {
      return (
        <div className="w-full h-full flex items-center justify-center">
          <span className="text-red-600">{loadError}</span>
        </div>
      );
    }
    const dadosCard = dadosDetalhados[cardSelecionado];
    if (!dadosCard) return null;
    const dadosFiltrados = aplicarFiltros(dadosCard.dados, cardSelecionado);

    // Se tipoGrafico estiver definido, renderiza o grafico e nao a tabela
    if (tipoGrafico) {
      // Prepara os dados para o grafico
      const colunasGrafico = dadosCard.colunas.filter((col) => col.chart);
      const labelKey = dadosCard.labelKey || "nome";
      const primaryCol = colunasGrafico[0];
      const isSingleSerie = colunasGrafico.length === 1;
      const toNumber = (valor: any) => {
        if (typeof valor === "string") {
          return Number(valor.replace(/[^\d,.-]/g, "").replace(",", "."));
        }
        return Number(valor);
      };

      let data: any[] = [];
      if (tipoGrafico === "pizza") {
        if (isSingleSerie && primaryCol) {
          data = dadosFiltrados.map((linha: any, idx: number) => {
            const valor = linha[primaryCol.key];
            const num = toNumber(valor);
            return {
              name: linha[labelKey] || `Item ${idx + 1}`,
              value: !isNaN(num) ? num : 0,
            };
          });
        } else {
          // Cada coluna vira uma fatia, soma valores numericos
          data = colunasGrafico.map((col) => {
            let total = 0;
            dadosFiltrados.forEach((linha: any) => {
              const valor = linha[col.key];
              const num = toNumber(valor);
              if (!isNaN(num)) total += num;
            });
            return { name: col.label, value: total };
          });
        }
      } else {
        // Para barra e linha, cada linha e um ponto
        data = dadosFiltrados.map((linha: any, idx: number) => {
          const obj: any = { name: linha[labelKey] || `Item ${idx + 1}` };
          colunasGrafico.forEach((col) => {
            const valor = linha[col.key];
            const num = toNumber(valor);
            obj[col.key] = !isNaN(num) && valor !== undefined ? num : valor;
          });
          return obj;
        });
      }

      return (
        <div className="w-full h-full flex flex-col items-center justify-center">
          <div className="bg-white rounded-lg shadow p-6 w-full max-w-2xl">
            <h2 className="text-xl font-bold mb-4 text-[#4C7F16]">{dadosCard.titulo} - Grafico</h2>
            <div style={{ width: '100%', height: 350 }}>
              <ResponsiveContainer width="100%" height={300}>
                {tipoGrafico === "barra" && (
                  <BarChart data={data}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    {isSingleSerie && primaryCol ? (
                      <Bar dataKey={primaryCol.key} name={primaryCol.label} fill={COLORS[0]}>
                        {data.map((_: any, idx: number) => (
                          <Cell key={`cell-${idx}`} fill={COLORS[idx % COLORS.length]} />
                        ))}
                      </Bar>
                    ) : (
                      colunasGrafico.map((col, idx) => (
                        <Bar key={col.key} dataKey={col.key} name={col.label} fill={COLORS[idx % COLORS.length]} />
                      ))
                    )}
                  </BarChart>
                )}
                {tipoGrafico === "linha" && (
                  <LineChart data={data}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    {isSingleSerie && primaryCol ? (
                      <Line
                        key={primaryCol.key}
                        type="monotone"
                        dataKey={primaryCol.key}
                        name={primaryCol.label}
                        stroke={COLORS[0]}
                        strokeWidth={2}
                        dot={(dotProps: any) => (
                          <circle
                            cx={dotProps.cx}
                            cy={dotProps.cy}
                            r={4}
                            fill={COLORS[dotProps.index % COLORS.length]}
                            stroke="#ffffff"
                            strokeWidth={1}
                          />
                        )}
                      />
                    ) : (
                      colunasGrafico.map((col, idx) => (
                        <Line key={col.key} type="monotone" dataKey={col.key} name={col.label} stroke={COLORS[idx % COLORS.length]} strokeWidth={2} />
                      ))
                    )}
                  </LineChart>
                )}
                {tipoGrafico === "pizza" && (
                  <PieChart>
                    <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100} label>
                      {data.map((entry, idx) => (
                        <Cell key={`cell-${idx}`} fill={COLORS[idx % COLORS.length]} />
                      ))}
                    </Pie>
                    <Legend />
                    <Tooltip />
                  </PieChart>
                )}
              </ResponsiveContainer>
            </div>
            <button
              className="mt-6 bg-[#4C7F16] hover:bg-[#3d6812] text-white px-6 py-2 rounded text-sm transition"
              onClick={() => setTipoGrafico(null)}
            >
              Voltar para a lista
            </button>
          </div>
        </div>
      );
    }

    // Se nao, renderiza a tabela normalmente
    return (
      <div className="w-full h-full flex flex-col">
        <div className="bg-white rounded-lg shadow flex-1 overflow-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 sticky top-0">
              <tr>
                {dadosCard.colunas.map((col, idx) => (
                  <th key={idx} className="px-4 py-3 text-left font-semibold text-gray-700 border-b">
                    {col.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {dadosFiltrados.map((linha: any, idx: number) => (
                <tr key={idx} className="border-b hover:bg-gray-50">
                  {dadosCard.colunas.map((col, colIdx) => (
                    <td key={colIdx} className="px-4 py-3 text-gray-600">
                      {formatarValor(linha[col.key], col)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex justify-center mt-6">
          <button
            className="bg-[#4C7F16] hover:bg-[#3d6812] text-white px-8 py-2 rounded text-sm transition"
            onClick={() => setShowGraficoModal(true)}
          >
            Gerar grafico
          </button>
        </div>

        {/* Modal de selecao de grafico */}
        {showGraficoModal && (
          <div
            className="fixed inset-0 flex items-center justify-center z-50"
            style={{
              background: 'rgba(255,255,255,0.3)',
              backdropFilter: 'blur(6px)',
              WebkitBackdropFilter: 'blur(6px)'
            }}
          >
            <div className="bg-white rounded-lg p-8 min-w-[320px] shadow-lg flex flex-col items-center">
              <h3 className="text-lg font-semibold mb-4 text-[#4C7F16]">Escolha o tipo de grafico</h3>
              <div className="flex flex-col gap-3 w-full">
                <button
                  className="border border-[#4C7F16] text-[#4C7F16] rounded px-4 py-2 hover:bg-[#e8f5e9]"
                  onClick={() => { setTipoGrafico("barra"); setShowGraficoModal(false); }}
                >
                  Grafico de Barra
                </button>
                <button
                  className="border border-[#4C7F16] text-[#4C7F16] rounded px-4 py-2 hover:bg-[#e8f5e9]"
                  onClick={() => { setTipoGrafico("pizza"); setShowGraficoModal(false); }}
                >
                  Grafico de Pizza
                </button>
                <button
                  className="border border-[#4C7F16] text-[#4C7F16] rounded px-4 py-2 hover:bg-[#e8f5e9]"
                  onClick={() => { setTipoGrafico("linha"); setShowGraficoModal(false); }}
                >
                  Grafico de Linha
                </button>
              </div>
              <button
                className="mt-6 text-gray-500 hover:text-gray-700"
                onClick={() => setShowGraficoModal(false)}
              >
                Cancelar
              </button>
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#E8E8E8]">
      {/* NavBar */}
      <nav className="bg-[#A3CE6F] h-20 flex items-center justify-between px-12 shrink-0">
        {cardSelecionado ? (
          <button onClick={voltarParaCards}>
            <FaArrowLeft className="w-10 h-10 text-white cursor-pointer" />
          </button>
        ) : (
          <Link href="/dimensoes/visualizacao_superuser">
            <FaArrowLeft className="w-10 h-10 text-white cursor-pointer" />
          </Link>
        )}
        <h1 className="text-white text-3xl font-bold">Exibição de dados</h1>
        <Link href="/login" className="w-10 h-10 rounded-full overflow-hidden bg-white/70">
          <img src="/default-avatar-profile-icon.webp" alt="Perfil" className="w-full h-full object-cover" />
        </Link>
      </nav>

      {/* Conteudo */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar de Filtros */}
        <aside className="w-72 bg-[#4C7F16] text-white p-6 shrink-0 flex flex-col">
          <h2 className="text-lg font-semibold mb-6">Personalizar</h2>
          <div className="space-y-3">
            <input
              type="text"
              placeholder="Tipo"
              value={filtros.tipo}
              onChange={(e) => handleFiltroChange("tipo", e.target.value)}
              className="w-full bg-white text-gray-800 px-3 py-2 rounded text-sm"
            />
            <input
              type="text"
              placeholder="Fonte"
              value={filtros.fonte}
              onChange={(e) => handleFiltroChange("fonte", e.target.value)}
              className="w-full bg-white text-gray-800 px-3 py-2 rounded text-sm"
            />
            <select
              value={filtros.ano}
              onChange={(e) => handleFiltroChange("ano", e.target.value)}
              className="w-full bg-white text-gray-800 px-3 py-2 rounded text-sm"
            >
              <option value="">Ano</option>
              {isLoading ? (
                <option value="" disabled>
                  Carregando anos...
                </option>
              ) : anoOptions.length === 0 ? (
                <option value="" disabled>
                  Nenhum ano encontrado
                </option>
              ) : (
                anoOptions.map((ano) => (
                  <option key={ano} value={ano}>
                    {ano}
                  </option>
                ))
              )}
            </select>
            <select
              value={filtros.semestre}
              onChange={(e) => handleFiltroChange("semestre", e.target.value)}
              className="w-full bg-white text-gray-800 px-3 py-2 rounded text-sm"
            >
              <option value="">Semestre</option>
              {isLoading ? (
                <option value="" disabled>
                  Carregando semestres...
                </option>
              ) : semestreOptions.length === 0 ? (
                <option value="" disabled>
                  Nenhum semestre encontrado
                </option>
              ) : (
                semestreOptions.map((semestre) => (
                  <option key={semestre} value={semestre}>
                    {semestre}
                  </option>
                ))
              )}
            </select>
            <select
              value={filtros.disciplina}
              onChange={(e) => handleFiltroChange("disciplina", e.target.value)}
              className="w-full bg-white text-gray-800 px-3 py-2 rounded text-sm"
            >
              <option value="">Disciplina</option>
              {isLoading ? (
                <option value="" disabled>
                  Carregando disciplinas...
                </option>
              ) : disciplinaOptions.length === 0 ? (
                <option value="" disabled>
                  Nenhuma disciplina cadastrada
                </option>
              ) : (
                disciplinaOptions.map((disciplina) => (
                  <option key={disciplina} value={disciplina}>
                    {disciplina}
                  </option>
                ))
              )}
            </select>
            <select
              value={filtros.curso}
              onChange={(e) => handleFiltroChange("curso", e.target.value)}
              className="w-full bg-white text-gray-800 px-3 py-2 rounded text-sm"
            >
              <option value="">Curso</option>
              {isLoading ? (
                <option value="" disabled>
                  Carregando cursos...
                </option>
              ) : cursoOptions.length === 0 ? (
                <option value="" disabled>
                  Nenhum curso cadastrado
                </option>
              ) : (
                cursoOptions.map((curso) => (
                  <option key={curso} value={curso}>
                    {curso}
                  </option>
                ))
              )}
            </select>
          </div>

          <div className="mt-8 space-y-3">
            <button className="w-full bg-[#3d6812] hover:bg-[#2d5010] px-6 py-2 rounded text-sm transition">
              Salvar
            </button>
            <Link href="/dimensoes/visualizacao_superuser/ver_dados/visu_grafico">
              <button className="w-full bg-[#3d6812] hover:bg-[#2d5010] px-6 py-2 rounded text-sm transition">
                Visualizar graficos
              </button>
            </Link>
          </div>
        </aside>

        {/* Conteudo Principal */}
        <main className="flex-1 p-6 overflow-auto">
          {cardSelecionado ? (
            renderTabela()
          ) : (
            <div className="grid grid-cols-2 gap-5 w-full h-full">
              {/* Linha 1 */}
              <div
                onClick={() => handleCardClick("negocios")}
                className="bg-white rounded-lg shadow p-6 flex flex-col items-center justify-center cursor-pointer hover:shadow-lg hover:scale-[1.02] transition-all"
              >
                <span className="text-gray-700 text-base mb-2">Negocios gerados:</span>
                <span className="text-gray-800 text-2xl font-bold">{metrics?.negociosGerados ?? "-"}</span>
              </div>
              <div
                onClick={() => handleCardClick("disciplinas")}
                className="bg-white rounded-lg shadow p-6 flex flex-col items-center justify-center cursor-pointer hover:shadow-lg hover:scale-[1.02] transition-all"
              >
                <span className="text-gray-700 text-base mb-2">Disciplinas de inovacao:</span>
                <span className="text-gray-800 text-2xl font-bold">{metrics?.disciplinasInovacao ?? "-"}</span>
              </div>

              {/* Linha 2 */}
              <div
                onClick={() => handleCardClick("fomento")}
                className="bg-white rounded-lg shadow p-6 flex flex-col items-center justify-center cursor-pointer hover:shadow-lg hover:scale-[1.02] transition-all"
              >
                <span className="text-gray-700 text-base mb-2">Fomento captado:</span>
                <span className="text-gray-800 text-2xl font-bold">
                  {metrics ? formatarMoeda(metrics.fomentoCaptado) : "-"}
                </span>
              </div>
              <div
                onClick={() => handleCardClick("eventos")}
                className="bg-white rounded-lg shadow p-6 flex flex-col items-center justify-center cursor-pointer hover:shadow-lg hover:scale-[1.02] transition-all"
              >
                <span className="text-gray-700 text-base mb-2">Eventos realizados:</span>
                <span className="text-gray-800 text-2xl font-bold">{metrics?.eventosRealizados ?? "-"}</span>
              </div>

              {/* Linha 3 */}
              <div
                onClick={() => handleCardClick("alunos")}
                className="bg-white rounded-lg shadow p-6 flex flex-col items-center justify-center cursor-pointer hover:shadow-lg hover:scale-[1.02] transition-all"
              >
                <span className="text-gray-700 text-base mb-2">Alunos em disciplinas:</span>
                <span className="text-gray-800 text-2xl font-bold">{metrics?.alunosEnvolvidos ?? "-"}</span>
              </div>
              <div
                onClick={() => handleCardClick("capital")}
                className="bg-white rounded-lg shadow p-6 flex flex-col items-center justify-center cursor-pointer hover:shadow-lg hover:scale-[1.02] transition-all"
              >
                <span className="text-gray-700 text-base mb-2">Capital captado (cursos):</span>
                <span className="text-gray-800 text-2xl font-bold">
                  {metrics ? formatarMoeda(metrics.capitalCaptado) : "-"}
                </span>
              </div>

              {/* Linha 4 */}
              <div
                onClick={() => handleCardClick("motores")}
                className="bg-white rounded-lg shadow p-6 flex flex-col items-center justify-center cursor-pointer hover:shadow-lg hover:scale-[1.02] transition-all"
              >
                <span className="text-gray-700 text-base mb-2">Motores</span>
                <span className="text-gray-800 text-2xl font-bold">{metrics?.motores ?? "-"}</span>
              </div>
              <div
                onClick={() => handleCardClick("publico_eventos")}
                className="bg-white rounded-lg shadow p-6 flex flex-col items-center justify-center cursor-pointer hover:shadow-lg hover:scale-[1.02] transition-all"
              >
                <span className="text-gray-700 text-base mb-2">Quantidade de publico em eventos</span>
                <span className="text-gray-800 text-2xl font-bold">{metrics?.publicoEventos ?? "-"}</span>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
