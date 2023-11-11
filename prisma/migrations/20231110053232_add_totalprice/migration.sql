-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "basePrice - (basePrice * discountPercentage/100)" DECIMAL(8,2) NOT NULL DEFAULT 0;
