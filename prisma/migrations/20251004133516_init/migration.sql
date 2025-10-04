/*
  Warnings:

  - Changed the type of `data_criacao` on the `Motor` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "public"."Motor" DROP COLUMN "data_criacao",
ADD COLUMN     "data_criacao" TIMESTAMP(3) NOT NULL;
