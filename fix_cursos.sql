-- Corrigir estrutura da tabela Cursos
ALTER TABLE "Cursos" DROP COLUMN IF EXISTS competicoes;
ALTER TABLE "Cursos" ADD COLUMN competicoes INTEGER DEFAULT 0;
ALTER TABLE "Cursos" DROP COLUMN IF EXISTS fomento;
ALTER TABLE "Cursos" ADD COLUMN fomento JSONB;
