/*
  Warnings:

  - You are about to drop the column `basePrice - (basePrice * discountPercentage/100)` on the `Product` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Product" DROP COLUMN "basePrice - (basePrice * discountPercentage/100)";
