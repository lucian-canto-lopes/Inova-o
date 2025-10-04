/*
  Warnings:

  - You are about to drop the column `ano_criacao` on the `Negocio` table. All the data in the column will be lost.
  - Added the required column `data_criacao` to the `Negocio` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Negocio" DROP COLUMN "ano_criacao",
ADD COLUMN     "data_criacao" TIMESTAMP(3) NOT NULL;
