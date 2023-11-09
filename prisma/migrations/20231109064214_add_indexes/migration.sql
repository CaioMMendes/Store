-- CreateIndex
CREATE INDEX "Category_slug_idx" ON "Category"("slug");

-- CreateIndex
CREATE INDEX "Product_discountPercentage_idx" ON "Product"("discountPercentage");

-- CreateIndex
CREATE INDEX "Product_basePrice_idx" ON "Product"("basePrice");

-- CreateIndex
CREATE INDEX "Product_name_idx" ON "Product"("name");

-- CreateIndex
CREATE INDEX "Product_slug_idx" ON "Product"("slug");

-- CreateIndex
CREATE INDEX "UserCart_userId_idx" ON "UserCart"("userId");

-- CreateIndex
CREATE INDEX "UserCart_productId_idx" ON "UserCart"("productId");
