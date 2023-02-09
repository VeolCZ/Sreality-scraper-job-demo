-- CreateTable
CREATE TABLE "Flats" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "name" TEXT NOT NULL,
    "locality" TEXT NOT NULL,
    "imgUrls" TEXT[],

    CONSTRAINT "Flats_pkey" PRIMARY KEY ("id")
);
