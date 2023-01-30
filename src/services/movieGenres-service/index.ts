import { movie_genres } from "@prisma/client";
import { notFoundError } from "../../errors";
import movieGenresRepositoy from "../../repositories/movieGenres-repository";

async function getMovieGenres(): Promise<movie_genres[]> {
  const movieGenres = await movieGenresRepositoy.selectMovieGenres();

  if (!movieGenres) {
    throw notFoundError();
  }

  return movieGenres;
}

const movieGenresService = {
  getMovieGenres,
};

export default movieGenresService;
