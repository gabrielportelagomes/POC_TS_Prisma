import prisma from "../../config/database";
import { MovieGenre } from "../../protocols";

async function selectMovieGenres() {
  return await prisma.movie_genres.findMany();
}

async function selectMovieGenreById(id: number) {
  return await prisma.movie_genres.findUnique({
    where: { id },
  });
}

const movieGenresRepositoy = {
  selectMovieGenres,
  selectMovieGenreById,
};

export default movieGenresRepositoy;
