-- CreateTable
CREATE TABLE "public"."Disciplina" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "coordenador" TEXT NOT NULL,
    "semestre" TEXT NOT NULL,
    "codigo" TEXT NOT NULL,
    "alunos_matriculados" TEXT[],
    "alunos_aprovados" TEXT[],

    CONSTRAINT "Disciplina_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Evento" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "data_inicio" TIMESTAMP(3) NOT NULL,
    "duracao" TEXT NOT NULL,
    "custo" DOUBLE PRECISION NOT NULL,
    "receita" DOUBLE PRECISION NOT NULL,
    "publico_participante" TEXT[],
    "qtd_publico" INTEGER NOT NULL,
    "equipe" TEXT[],
    "coordenadores" TEXT[],
    "parceiros" TEXT[],

    CONSTRAINT "Evento_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Motor" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "projetos" TEXT[],
    "motor_tipo" TEXT NOT NULL,
    "data_criacao" TEXT NOT NULL,
    "lideres" TEXT[],
    "equipe" TEXT[],
    "qtd_empresas_atendidas" INTEGER NOT NULL,
    "faturamento" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Motor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Negocio" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "area_atuacao" TEXT NOT NULL,
    "faturamento_anual" DOUBLE PRECISION NOT NULL,
    "ano_criacao" TIMESTAMP(3) NOT NULL,
    "fundadores" TEXT[],
    "porte" TEXT NOT NULL,

    CONSTRAINT "Negocio_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Disciplina_codigo_key" ON "public"."Disciplina"("codigo");
