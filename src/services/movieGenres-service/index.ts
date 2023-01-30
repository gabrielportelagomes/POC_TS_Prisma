import { movie_genres } from "@prisma/client";
import { notFoundError } from "../../errors";
import movieGenresRepositoy from "../../repositories/movieGenres-repository";

async function getMovieGenres(): Promise<movie_genres[]> {
  const movies = await movieGenresRepositoy.selectMovieGenres();

  if (!movies) {
    throw notFoundError();
  }

  return movies;
}

const movieGenresService = {
  getMovieGenres,
};

export default movieGenresService;
