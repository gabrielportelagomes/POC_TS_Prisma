import { movie_genres } from "@prisma/client";
import prisma from "../../config/database";

async function selectMovieGenres(): Promise<movie_genres[]> {
  return await prisma.movie_genres.findMany();
}

async function selectMovieGenreById(id: number): Promise<movie_genres> {
  return await prisma.movie_genres.findUnique({
    where: { id },
  });
}

const movieGenresRepositoy = {
  selectMovieGenres,
  selectMovieGenreById,
};

export default movieGenresRepositoy;
