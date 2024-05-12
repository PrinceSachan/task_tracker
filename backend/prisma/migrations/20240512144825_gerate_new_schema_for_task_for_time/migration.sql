/*
  Warnings:

  - Made the column `createdAt` on table `Tasks` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Tasks" ALTER COLUMN "createdAt" SET NOT NULL;
