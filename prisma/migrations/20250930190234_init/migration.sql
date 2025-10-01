/*
  Warnings:

  - The primary key for the `Disciplina` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Disciplina` table. All the data in the column will be lost.
  - The primary key for the `Evento` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Evento` table. All the data in the column will be lost.
  - The primary key for the `Motor` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Motor` table. All the data in the column will be lost.
  - The primary key for the `Negocio` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Negocio` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[dimensaoId]` on the table `Disciplina` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[dimensaoId]` on the table `Evento` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[dimensaoId]` on the table `Motor` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[dimensaoId]` on the table `Negocio` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `dimensaoId` to the `Disciplina` table without a default value. This is not possible if the table is not empty.
  - Added the required column `dimensaoId` to the `Evento` table without a default value. This is not possible if the table is not empty.
  - Added the required column `dimensaoId` to the `Motor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `dimensaoId` to the `Negocio` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."Disciplina" DROP CONSTRAINT "Disciplina_pkey",
DROP COLUMN "id",
ADD COLUMN     "dimensaoId" INTEGER NOT NULL,
ADD CONSTRAINT "Disciplina_pkey" PRIMARY KEY ("dimensaoId");

-- AlterTable
ALTER TABLE "public"."Evento" DROP CONSTRAINT "Evento_pkey",
DROP COLUMN "id",
ADD COLUMN     "dimensaoId" INTEGER NOT NULL,
ADD CONSTRAINT "Evento_pkey" PRIMARY KEY ("dimensaoId");

-- AlterTable
ALTER TABLE "public"."Motor" DROP CONSTRAINT "Motor_pkey",
DROP COLUMN "id",
ADD COLUMN     "dimensaoId" INTEGER NOT NULL,
ADD CONSTRAINT "Motor_pkey" PRIMARY KEY ("dimensaoId");

-- AlterTable
ALTER TABLE "public"."Negocio" DROP CONSTRAINT "Negocio_pkey",
DROP COLUMN "id",
ADD COLUMN     "dimensaoId" INTEGER NOT NULL,
ADD CONSTRAINT "Negocio_pkey" PRIMARY KEY ("dimensaoId");

-- CreateTable
CREATE TABLE "public"."Dimensao" (
    "id" SERIAL NOT NULL,
    "tipo" TEXT NOT NULL,

    CONSTRAINT "Dimensao_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Dimensao_Dimensao" (
    "dimensaoAId" INTEGER NOT NULL,
    "dimensaoBId" INTEGER NOT NULL,

    CONSTRAINT "Dimensao_Dimensao_pkey" PRIMARY KEY ("dimensaoAId","dimensaoBId")
);

-- CreateIndex
CREATE UNIQUE INDEX "Disciplina_dimensaoId_key" ON "public"."Disciplina"("dimensaoId");

-- CreateIndex
CREATE UNIQUE INDEX "Evento_dimensaoId_key" ON "public"."Evento"("dimensaoId");

-- CreateIndex
CREATE UNIQUE INDEX "Motor_dimensaoId_key" ON "public"."Motor"("dimensaoId");

-- CreateIndex
CREATE UNIQUE INDEX "Negocio_dimensaoId_key" ON "public"."Negocio"("dimensaoId");

-- AddForeignKey
ALTER TABLE "public"."Dimensao_Dimensao" ADD CONSTRAINT "Dimensao_Dimensao_dimensaoAId_fkey" FOREIGN KEY ("dimensaoAId") REFERENCES "public"."Dimensao"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Dimensao_Dimensao" ADD CONSTRAINT "Dimensao_Dimensao_dimensaoBId_fkey" FOREIGN KEY ("dimensaoBId") REFERENCES "public"."Dimensao"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Disciplina" ADD CONSTRAINT "Disciplina_dimensaoId_fkey" FOREIGN KEY ("dimensaoId") REFERENCES "public"."Dimensao"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Evento" ADD CONSTRAINT "Evento_dimensaoId_fkey" FOREIGN KEY ("dimensaoId") REFERENCES "public"."Dimensao"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Motor" ADD CONSTRAINT "Motor_dimensaoId_fkey" FOREIGN KEY ("dimensaoId") REFERENCES "public"."Dimensao"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Negocio" ADD CONSTRAINT "Negocio_dimensaoId_fkey" FOREIGN KEY ("dimensaoId") REFERENCES "public"."Dimensao"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
