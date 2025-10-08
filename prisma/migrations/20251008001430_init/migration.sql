-- DropForeignKey
ALTER TABLE "public"."Dimensao_Dimensao" DROP CONSTRAINT "Dimensao_Dimensao_dimensaoAId_fkey";

-- DropForeignKey
ALTER TABLE "public"."Dimensao_Dimensao" DROP CONSTRAINT "Dimensao_Dimensao_dimensaoBId_fkey";

-- DropForeignKey
ALTER TABLE "public"."Disciplina" DROP CONSTRAINT "Disciplina_dimensaoId_fkey";

-- DropForeignKey
ALTER TABLE "public"."Evento" DROP CONSTRAINT "Evento_dimensaoId_fkey";

-- DropForeignKey
ALTER TABLE "public"."Motor" DROP CONSTRAINT "Motor_dimensaoId_fkey";

-- DropForeignKey
ALTER TABLE "public"."Negocio" DROP CONSTRAINT "Negocio_dimensaoId_fkey";

-- AddForeignKey
ALTER TABLE "Dimensao_Dimensao" ADD CONSTRAINT "Dimensao_Dimensao_dimensaoAId_fkey" FOREIGN KEY ("dimensaoAId") REFERENCES "Dimensao"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Dimensao_Dimensao" ADD CONSTRAINT "Dimensao_Dimensao_dimensaoBId_fkey" FOREIGN KEY ("dimensaoBId") REFERENCES "Dimensao"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Disciplina" ADD CONSTRAINT "Disciplina_dimensaoId_fkey" FOREIGN KEY ("dimensaoId") REFERENCES "Dimensao"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Evento" ADD CONSTRAINT "Evento_dimensaoId_fkey" FOREIGN KEY ("dimensaoId") REFERENCES "Dimensao"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Motor" ADD CONSTRAINT "Motor_dimensaoId_fkey" FOREIGN KEY ("dimensaoId") REFERENCES "Dimensao"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Negocio" ADD CONSTRAINT "Negocio_dimensaoId_fkey" FOREIGN KEY ("dimensaoId") REFERENCES "Dimensao"("id") ON DELETE CASCADE ON UPDATE CASCADE;
