/*
  Warnings:

  - Made the column `imagen_url` on table `Usuario` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Usuario" ALTER COLUMN "imagen_url" SET NOT NULL,
ALTER COLUMN "imagen_url" SET DEFAULT '/images/user.jpg';
