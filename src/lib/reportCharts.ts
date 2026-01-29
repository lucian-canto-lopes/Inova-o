export type ChartDatum = {
  name: string;
  value: number;
};

export type ChartFilters = {
  fonte?: string;
  ano?: string;
  semestre?: string;
  disciplina?: string;
  curso?: string;
};

export type ReportDetalhes = {
  negocios: Array<{
    nome: string;
    faturamento_anual: number;
    data_criacao?: string;
    fundadores?: string[];
    area_atuacao?: string;
    porte?: string;
  }>;
  disciplinas: Array<{
    nome: string;
    coordenador?: string;
    semestre?: string;
    alunos_matriculados?: number;
    alunos_aprovados?: number;
  }>;
  eventos: Array<{
    nome: string;
    data_inicio?: string;
    duracao?: string;
    custo?: number;
    receita?: number;
    qtd_publico?: number;
  }>;
  motores: Array<{
    nome: string;
    motor_tipo?: string;
    qtd_empresas_atendidas?: number;
    faturamento?: number;
    projetos?: unknown;
    data_criacao?: string;
  }>;
  cursos?: Array<{
    nome: string;
    fomento?: number | null;
    capital_captado?: number;
    competicoes?: string[] | string | null;
    disciplinas?: Array<{
      nome: string;
      semestre?: string;
    }>;
  }>;
  relacoes_dimensoes?: Array<{
    a: { id: number; tipo: string; nome: string | null };
    b: { id: number; tipo: string; nome: string | null };
  }>;
};

type Projeto = {
  titulo?: string;
  nome?: string;
  valor_gerado?: unknown;
  orcamento?: unknown;
  data_criacao?: string;
  prazo?: string;
};

const MAX_LABEL = 20;

const normalizeText = (value: unknown) =>
  String(value ?? "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim()
    .toLowerCase();

const normalizeFilter = (value: unknown) => {
  const text = normalizeText(value);
  if (!text || text === "todos" || text === "todas" || text === "anual") return "";
  return text;
};

const truncateLabel = (value: string, maxLength = MAX_LABEL) => {
  if (!value) return "";
  if (value.length <= maxLength) return value;
  return `${value.slice(0, maxLength - 3)}...`;
};

const parseNumber = (value: unknown) => {
  if (typeof value === "number" && !Number.isNaN(value)) return value;
  if (!value) return 0;
  const raw = String(value).replace(/[^\d,.-]/g, "");
  if (!raw) return 0;
  const normalized = raw
    .replace(/\.(?=\d{3}(?:\D|$))/g, "")
    .replace(",", ".");
  const parsed = Number(normalized);
  return Number.isNaN(parsed) ? 0 : parsed;
};

const extractYearFromSemestre = (semestre?: string) => {
  const match = String(semestre ?? "").match(/\d{4}/);
  return match ? match[0] : "";
};

const extractYearFromDate = (dateValue?: string) => {
  if (!dateValue) return "";
  const date = new Date(dateValue);
  if (Number.isNaN(date.getTime())) return "";
  return String(date.getFullYear());
};

const getSemestreFilter = (value?: string) => {
  const text = normalizeText(value);
  if (!text || text.includes("anual")) return null;
  if (text.startsWith("1")) return 1;
  if (text.startsWith("2")) return 2;
  return null;
};

const matchesSemestreFromDate = (dateValue: string | undefined, semestreFilter: number | null) => {
  if (!semestreFilter) return true;
  if (!dateValue) return true;
  const date = new Date(dateValue);
  if (Number.isNaN(date.getTime())) return true;
  const semestre = date.getMonth() < 6 ? 1 : 2;
  return semestre === semestreFilter;
};

const matchesSemestreFromText = (semestreValue: string | undefined, semestreFilter: number | null) => {
  if (!semestreFilter) return true;
  const text = String(semestreValue ?? "");
  if (!text) return true;
  return text.includes(`.${semestreFilter}`) || text.includes(`/${semestreFilter}`) || text.endsWith(String(semestreFilter));
};

const matchesFilterText = (value: unknown, filter: string) => {
  if (!filter) return true;
  return normalizeText(value).includes(filter);
};

const buildProjetos = (motores: ReportDetalhes["motores"]) => {
  const projetos: Projeto[] = [];
  for (const motor of motores) {
    if (Array.isArray(motor.projetos)) {
      for (const item of motor.projetos) {
        if (item && typeof item === "object") {
          projetos.push(item as Projeto);
        }
      }
    }
  }
  return projetos;
};

export const buildChartData = (
  filters: ChartFilters,
  detalhes?: ReportDetalhes | null,
  limit = 8,
): ChartDatum[] => {
  if (!detalhes) return [];
  const fonte = normalizeText(filters.fonte);
  const anoFilter = normalizeFilter(filters.ano);
  const disciplinaFilter = normalizeFilter(filters.disciplina);
  const cursoFilter = normalizeFilter(filters.curso);
  const semestreFilter = getSemestreFilter(filters.semestre);

  const matchesAno = (year: string) => !anoFilter || year === anoFilter;

  let data: ChartDatum[] = [];

  if (fonte.includes("proj")) {
    const projetos = buildProjetos(detalhes.motores);
    data = projetos
      .filter((p) => {
        const year = extractYearFromDate(p.data_criacao || p.prazo);
        if (!matchesAno(year)) return false;
        if (!matchesSemestreFromDate(p.data_criacao || p.prazo, semestreFilter)) return false;
        return true;
      })
      .map((p, index) => ({
        name: truncateLabel(p.titulo || p.nome || `Projeto ${index + 1}`),
        value: parseNumber(p.valor_gerado ?? p.orcamento),
      }));
  } else if (fonte.includes("nego")) {
    data = detalhes.negocios
      .filter((n) => {
        const year = extractYearFromDate(n.data_criacao);
        if (!matchesAno(year)) return false;
        if (!matchesSemestreFromDate(n.data_criacao, semestreFilter)) return false;
        return true;
      })
      .map((n) => ({
        name: truncateLabel(n.nome),
        value: parseNumber(n.faturamento_anual),
      }));
  } else if (fonte.includes("event")) {
    data = detalhes.eventos
      .filter((e) => {
        const year = extractYearFromDate(e.data_inicio);
        if (!matchesAno(year)) return false;
        if (!matchesSemestreFromDate(e.data_inicio, semestreFilter)) return false;
        return true;
      })
      .map((e) => ({
        name: truncateLabel(e.nome),
        value: parseNumber(e.qtd_publico ?? e.receita),
      }));
  } else {
    const courseDisciplines = cursoFilter
      ? new Set(
          (detalhes.cursos ?? [])
            .filter((curso) => matchesFilterText(curso.nome, cursoFilter))
            .flatMap((curso) => curso.disciplinas ?? [])
            .map((disciplina) => normalizeText(disciplina.nome))
        )
      : null;
    data = detalhes.disciplinas
      .filter((d) => {
        if (!matchesFilterText(d.nome, disciplinaFilter)) return false;
        if (courseDisciplines) {
          if (courseDisciplines.size === 0) return false;
          if (!courseDisciplines.has(normalizeText(d.nome))) return false;
        }
        const year = extractYearFromSemestre(d.semestre);
        if (!matchesAno(year)) return false;
        if (!matchesSemestreFromText(d.semestre, semestreFilter)) return false;
        return true;
      })
      .map((d) => ({
        name: truncateLabel(d.nome),
        value: parseNumber(d.alunos_matriculados ?? d.alunos_aprovados),
      }));
  }

  return data
    .filter((item) => Number.isFinite(item.value))
    .sort((a, b) => b.value - a.value)
    .slice(0, limit);
};
