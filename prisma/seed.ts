import prisma from "../src/config/database";

async function main() {
  await prisma.movie_genres.createMany({
    data: [
      { name: "Drama" },
      { name: "Comédia" },
      { name: "Ficção científica" },
      { name: "Terror" },
      { name: "Musical" },
      { name: "Ação" },
      { name: "Documentário" },
    ],
  });

  await prisma.streaming_services.createMany({
    data: [
      { name: "Netflix" },
      { name: "HBO Max" },
      { name: "Prime Video" },
      { name: "Disney+" },
      { name: "Star+" },
      { name: "Paramount+" },
      { name: "Globoplay" },
      { name: "Apple TV+" },
    ],
  });

  await prisma.movies.createMany({
    data: [
      {
        name: "Mad Max: Estrada da Fúria",
        streaming_service_id: 2,
        genre_id: 6,
      },
    ],
  });
}

main()
  .then(() => {
    console.log("Registro feito com sucesso!");
  })
  .catch((e) => {
    console.log(e);
    console.log("Ocorreu um erro durante o processo de registro!");
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
