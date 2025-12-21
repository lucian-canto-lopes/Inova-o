"use client";

import { useState } from "react";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

type CardType = "alunos" | "negocios" | "disciplinas" | "fomento" | "eventos" | "pis" | "motores" | "projetos" | null;

// Dados detalhados de exemplo para cada card
const dadosDetalhados = {
  alunos: {
    titulo: "Alunos Envolvidos",
    colunas: ["Nome do Aluno", "Curso", "Projeto Final", "Participação em Eventos", "Fomento Captado", "Avaliação", "Status Acadêmico"],
    dados: [
      { nome: "Ana Beatriz Lima", curso: "Engenharia Ambiental", projeto: "Biofiltragem Urbana", eventos: "Hackathon Verde", fomento: "R$ 4.000", avaliacao: "9,3", status: "Ativa" },
      { nome: "João Carlos Neto", curso: "Design de Produto", projeto: "EcoDrone para mapeamento de áreas", eventos: "Não", fomento: "R$ 0", avaliacao: "8,1", status: "Ativa" },
      { nome: "Larissa Cunha", curso: "Ciência da Computação", projeto: "App de trocs sustentáveis", eventos: "InovaTech 2025", fomento: "R$ 2.500", avaliacao: "9,0", status: "Ativa" },
      { nome: "Rafael Mendes", curso: "Administração", projeto: "Plataforma de negócios locais", eventos: "Startup Weekend", fomento: "R$ 6.300", avaliacao: "8,7", status: "Formado" },
      { nome: "Tiago Martins", curso: "Engenharia Civil", projeto: "Telha inteligente com sensores solares", eventos: "Não", fomento: "R$ 1.800", avaliacao: "7,5", status: "Trancado" },
      { nome: "Juliana Freitas", curso: "Sistemas de Informação", projeto: "Bot para consumo consciente", eventos: "TecLab Mostra", fomento: "R$ 3.750", avaliacao: "9,5", status: "Ativa" },
      { nome: "Bruno Soares", curso: "Arquitetura e Urbanismo", projeto: "Estações modulares de reciclagem", eventos: "UrbanFuture", fomento: "R$ 5.200", avaliacao: "8,9", status: "Ativa" },
    ],
  },
  negocios: {
    titulo: "Negócios Gerados",
    colunas: ["Nome do Negócio", "Fundador", "Área", "Faturamento Anual", "Funcionários", "Status"],
    dados: [
      { nome: "EcoSmart", fundador: "Ana Beatriz Lima", area: "Sustentabilidade", faturamento: "R$ 120.000", funcionarios: "5", status: "Ativo" },
      { nome: "TechGreen", fundador: "João Carlos Neto", area: "Tecnologia Verde", faturamento: "R$ 85.000", funcionarios: "3", status: "Ativo" },
      { nome: "UrbanFlow", fundador: "Bruno Soares", area: "Mobilidade Urbana", faturamento: "R$ 200.000", funcionarios: "8", status: "Ativo" },
    ],
  },
  disciplinas: {
    titulo: "Disciplinas de Inovação",
    colunas: ["Nome da Disciplina", "Professor", "Carga Horária", "Alunos Matriculados", "Semestre", "Status"],
    dados: [
      { nome: "Empreendedorismo Digital", professor: "Dr. Carlos Silva", carga: "60h", alunos: "45", semestre: "2024.2", status: "Ativa" },
      { nome: "Design Thinking", professor: "Dra. Maria Santos", carga: "40h", alunos: "38", semestre: "2024.2", status: "Ativa" },
      { nome: "Inovação Tecnológica", professor: "Dr. Pedro Alves", carga: "80h", alunos: "52", semestre: "2024.2", status: "Ativa" },
    ],
  },
  fomento: {
    titulo: "Fomento Captado",
    colunas: ["Fonte", "Projeto", "Valor", "Data", "Responsável", "Status"],
    dados: [
      { fonte: "FAPESP", projeto: "EcoSmart Platform", valor: "R$ 15.000", data: "Mar/2024", responsavel: "Ana Beatriz", status: "Aprovado" },
      { fonte: "CNPq", projeto: "TechGreen App", valor: "R$ 12.000", data: "Abr/2024", responsavel: "João Carlos", status: "Aprovado" },
      { fonte: "Edital Interno", projeto: "UrbanFlow", valor: "R$ 8.000", data: "Mai/2024", responsavel: "Bruno Soares", status: "Em execução" },
    ],
  },
  eventos: {
    titulo: "Eventos Realizados",
    colunas: ["Nome do Evento", "Data", "Participantes", "Local", "Tipo", "Receita"],
    dados: [
      { nome: "Hackathon Verde", data: "15/03/2024", participantes: "120", local: "Auditório Central", tipo: "Competição", receita: "R$ 5.000" },
      { nome: "InovaTech 2025", data: "22/04/2024", participantes: "250", local: "Centro de Convenções", tipo: "Feira", receita: "R$ 12.000" },
      { nome: "Startup Weekend", data: "10/05/2024", participantes: "80", local: "Lab de Inovação", tipo: "Workshop", receita: "R$ 3.500" },
    ],
  },
  pis: {
    titulo: "PIs Criadas",
    colunas: ["Título", "Tipo", "Inventores", "Data Depósito", "Status", "Número"],
    dados: [
      { titulo: "Sistema de Biofiltragem", tipo: "Patente", inventores: "Ana B., Dr. Carlos", data: "10/02/2024", status: "Depositada", numero: "BR102024001234" },
      { titulo: "App Trocs", tipo: "Software", inventores: "Larissa Cunha", data: "15/03/2024", status: "Registrado", numero: "BR512024005678" },
      { titulo: "Telha Solar Inteligente", tipo: "Patente", inventores: "Tiago M., Dr. Pedro", data: "20/04/2024", status: "Em análise", numero: "BR102024002345" },
    ],
  },
  motores: {
    titulo: "Motores de Inovação",
    colunas: ["Nome", "Tipo", "Empresas Atendidas", "Projetos Ativos", "Financiamento", "Coordenador"],
    dados: [
      { nome: "Incubadora TechStart", tipo: "Incubadora", empresas: "12", projetos: "8", financiamento: "R$ 150.000", coordenador: "Dr. Carlos Silva" },
      { nome: "Aceleradora Growth", tipo: "Aceleradora", empresas: "6", projetos: "4", financiamento: "R$ 80.000", coordenador: "Dra. Maria Santos" },
      { nome: "Hub de Inovação", tipo: "Hub", empresas: "25", projetos: "15", financiamento: "R$ 200.000", coordenador: "Dr. Pedro Alves" },
    ],
  },
  projetos: {
    titulo: "Projetos",
    colunas: ["Nome do Projeto", "Área", "Líder", "Equipe", "Orçamento", "Prazo", "Status"],
    dados: [
      { nome: "EcoDrone", projeto: "Ambiental", lider: "João Carlos", equipe: "4", orcamento: "R$ 25.000", prazo: "Dez/2024", status: "Em andamento" },
      { nome: "Smart Campus", projeto: "Tecnologia", lider: "Larissa Cunha", equipe: "6", orcamento: "R$ 45.000", prazo: "Mar/2025", status: "Em andamento" },
      { nome: "Recicla+", projeto: "Sustentabilidade", lider: "Bruno Soares", equipe: "3", orcamento: "R$ 18.000", prazo: "Set/2024", status: "Concluído" },
    ],
  },
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

  // Dados de exemplo - esses valores viriam de uma API
  const dados = {
    negociosGerados: 20,
    disciplinasInovacao: 500,
    fomentoCaptado: 50000,
    eventosRealizados: 16,
    alunosEnvolvidos: 80,
    pisCriadas: 10,
    motores: 8,
    projetos: 8,
  };

  const handleFiltroChange = (campo: string, valor: string) => {
    setFiltros((prev) => ({ ...prev, [campo]: valor }));
  };

  const formatarMoeda = (valor: number) => {
    return valor.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  };

  const handleCardClick = (tipo: CardType) => {
    setCardSelecionado(tipo);
  };

  const voltarParaCards = () => {
    setCardSelecionado(null);
  };

  const renderTabela = () => {
    if (!cardSelecionado) return null;

    const dadosCard = dadosDetalhados[cardSelecionado];
    if (!dadosCard) return null;

    return (
      <div className="w-full h-full flex flex-col">
        <div className="bg-white rounded-lg shadow flex-1 overflow-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 sticky top-0">
              <tr>
                {dadosCard.colunas.map((col, idx) => (
                  <th key={idx} className="px-4 py-3 text-left font-semibold text-gray-700 border-b">
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {dadosCard.dados.map((linha: any, idx: number) => (
                <tr key={idx} className="border-b hover:bg-gray-50">
                  {Object.values(linha).map((valor: any, colIdx: number) => (
                    <td key={colIdx} className="px-4 py-3 text-gray-600">
                      {valor}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex justify-center mt-6">
          <button className="bg-[#4C7F16] hover:bg-[#3d6812] text-white px-8 py-2 rounded text-sm transition">
            Gerar gráfico
          </button>
        </div>
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
          <Link href="/visualizacao_superuser">
            <FaArrowLeft className="w-10 h-10 text-white cursor-pointer" />
          </Link>
        )}
        <h1 className="text-white text-3xl font-bold">Exibição de dados</h1>
        <Link href="/login" className="w-10 h-10 rounded-full overflow-hidden bg-white/70">
          <img src="/default-avatar-profile-icon.webp" alt="Perfil" className="w-full h-full object-cover" />
        </Link>
      </nav>

      {/* Conteúdo */}
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
            <input
              type="text"
              placeholder="Ano"
              value={filtros.ano}
              onChange={(e) => handleFiltroChange("ano", e.target.value)}
              className="w-full bg-white text-gray-800 px-3 py-2 rounded text-sm"
            />
            <input
              type="text"
              placeholder="Semestre"
              value={filtros.semestre}
              onChange={(e) => handleFiltroChange("semestre", e.target.value)}
              className="w-full bg-white text-gray-800 px-3 py-2 rounded text-sm"
            />
            <input
              type="text"
              placeholder="Disciplina"
              value={filtros.disciplina}
              onChange={(e) => handleFiltroChange("disciplina", e.target.value)}
              className="w-full bg-white text-gray-800 px-3 py-2 rounded text-sm"
            />
            <input
              type="text"
              placeholder="Curso"
              value={filtros.curso}
              onChange={(e) => handleFiltroChange("curso", e.target.value)}
              className="w-full bg-white text-gray-800 px-3 py-2 rounded text-sm"
            />
          </div>

          <div className="mt-8 space-y-3">
            <button className="w-full bg-[#3d6812] hover:bg-[#2d5010] px-6 py-2 rounded text-sm transition">
              Salvar
            </button>
            <Link href="/visualizacao_superuser/ver_dados/visu_grafico">
              <button className="w-full bg-[#3d6812] hover:bg-[#2d5010] px-6 py-2 rounded text-sm transition">
                Gerar gráfico
              </button>
            </Link>
          </div>
        </aside>

        {/* Conteúdo Principal */}
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
                <span className="text-gray-700 text-base mb-2">Negócios gerados:</span>
                <span className="text-gray-800 text-2xl font-bold">{dados.negociosGerados}</span>
              </div>
              <div
                onClick={() => handleCardClick("disciplinas")}
                className="bg-white rounded-lg shadow p-6 flex flex-col items-center justify-center cursor-pointer hover:shadow-lg hover:scale-[1.02] transition-all"
              >
                <span className="text-gray-700 text-base mb-2">Disciplinas de inovação:</span>
                <span className="text-gray-800 text-2xl font-bold">{dados.disciplinasInovacao}</span>
              </div>

              {/* Linha 2 */}
              <div
                onClick={() => handleCardClick("fomento")}
                className="bg-white rounded-lg shadow p-6 flex flex-col items-center justify-center cursor-pointer hover:shadow-lg hover:scale-[1.02] transition-all"
              >
                <span className="text-gray-700 text-base mb-2">Fomento captado:</span>
                <span className="text-gray-800 text-2xl font-bold">{formatarMoeda(dados.fomentoCaptado)}</span>
              </div>
              <div
                onClick={() => handleCardClick("eventos")}
                className="bg-white rounded-lg shadow p-6 flex flex-col items-center justify-center cursor-pointer hover:shadow-lg hover:scale-[1.02] transition-all"
              >
                <span className="text-gray-700 text-base mb-2">Eventos realizados:</span>
                <span className="text-gray-800 text-2xl font-bold">{dados.eventosRealizados}</span>
              </div>

              {/* Linha 3 */}
              <div
                onClick={() => handleCardClick("alunos")}
                className="bg-white rounded-lg shadow p-6 flex flex-col items-center justify-center cursor-pointer hover:shadow-lg hover:scale-[1.02] transition-all"
              >
                <span className="text-gray-700 text-base mb-2">Alunos envolvidos:</span>
                <span className="text-gray-800 text-2xl font-bold">{dados.alunosEnvolvidos}</span>
              </div>
              <div
                onClick={() => handleCardClick("pis")}
                className="bg-white rounded-lg shadow p-6 flex flex-col items-center justify-center cursor-pointer hover:shadow-lg hover:scale-[1.02] transition-all"
              >
                <span className="text-gray-700 text-base mb-2">PIs criadas:</span>
                <span className="text-gray-800 text-2xl font-bold">{dados.pisCriadas}</span>
              </div>

              {/* Linha 4 */}
              <div
                onClick={() => handleCardClick("motores")}
                className="bg-white rounded-lg shadow p-6 flex flex-col items-center justify-center cursor-pointer hover:shadow-lg hover:scale-[1.02] transition-all"
              >
                <span className="text-gray-700 text-base mb-2">Motores</span>
                <span className="text-gray-800 text-2xl font-bold">{dados.motores}</span>
              </div>
              <div
                onClick={() => handleCardClick("projetos")}
                className="bg-white rounded-lg shadow p-6 flex flex-col items-center justify-center cursor-pointer hover:shadow-lg hover:scale-[1.02] transition-all"
              >
                <span className="text-gray-700 text-base mb-2">Projetos</span>
                <span className="text-gray-800 text-2xl font-bold">{dados.projetos}</span>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}