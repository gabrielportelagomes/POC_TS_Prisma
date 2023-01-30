import movieGenresRepositoy from "../../repositories/movieGenres-repository";
import { duplicatedItem, notFoundError } from "../../errors";
import moviesRepositoy from "../../repositories/movies-repository";
import streamingServicesRepositoy from "../..//repositories/streamingServices-repository";
import { Movies } from "../../protocols";

async function postMovie(
  name: string,
  streaming_service_id: number,
  genre_id: number
): Promise<void> {
  const streaming = await streamingServicesRepositoy.selectStreamingServiceById(
    streaming_service_id
  );

  if (!streaming) {
    throw notFoundError();
  }

  const genre = await movieGenresRepositoy.selectMovieGenreById(genre_id);

  if (!genre) {
    throw notFoundError();
  }

  const movies = await moviesRepositoy.selectMoviesByInfos(
    name,
    streaming_service_id,
    genre_id
  );

  if (movies) {
    throw duplicatedItem();
  }

  await moviesRepositoy.createMovie(name, streaming_service_id, genre_id);
}

async function getMovies(): Promise<Movies[]> {
  const movies = await moviesRepositoy.selectMovies();

  if (!movies) {
    throw notFoundError();
  }

  return movies;
}

async function deleteMovie(movie_id: number): Promise<void> {
  const movie = await moviesRepositoy.selectMovieById(movie_id);

  if (!movie) {
    throw notFoundError();
  }

  await moviesRepositoy.deleteMovieById(movie_id);
}

async function updateMovie(
  movie_id: number,
  rating: number,
  date_watched: string
): Promise<void> {
  const movie = await moviesRepositoy.selectMovieById(movie_id);

  if (!movie) {
    throw notFoundError();
  }

  await moviesRepositoy.updateMovieById(movie_id, rating, date_watched);
}

async function getMoviesByGenre(genre_id: number): Promise<Movies[]> {
  const movie_genre = await movieGenresRepositoy.selectMovieGenreById(genre_id);

  if (!movie_genre) {
    throw notFoundError();
  }

  const movies = await moviesRepositoy.selectMoviesByGenre(genre_id);

  if (!movies) {
    throw notFoundError();
  }

  return movies;
}

const moviesService = {
  postMovie,
  getMovies,
  deleteMovie,
  updateMovie,
  getMoviesByGenre,
};

export default moviesService;
