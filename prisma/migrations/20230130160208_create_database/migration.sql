-- CreateTable
CREATE TABLE "movie_genres" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "movie_genres_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "movies" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "streaming_service_id" INTEGER NOT NULL,
    "genre_id" INTEGER NOT NULL,
    "watched" BOOLEAN DEFAULT false,
    "date_watched" TEXT,
    "rating" INTEGER,
    "created_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "movies_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "streaming_services" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "streaming_services_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "movie_genres_name_key" ON "movie_genres"("name");

-- CreateIndex
CREATE UNIQUE INDEX "streaming_services_name_key" ON "streaming_services"("name");

-- AddForeignKey
ALTER TABLE "movies" ADD CONSTRAINT "fk_genre_id" FOREIGN KEY ("genre_id") REFERENCES "movie_genres"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "movies" ADD CONSTRAINT "fk_streaming_service_id" FOREIGN KEY ("streaming_service_id") REFERENCES "streaming_services"("id") ON DELETE CASCADE ON UPDATE NO ACTION;
