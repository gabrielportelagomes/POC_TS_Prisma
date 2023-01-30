import { Movies } from "../../protocols";
import { movies } from "@prisma/client";
import prisma from "../../config/database";

async function selectMoviesByInfos(
  name: string,
  streaming_service_id: number,
  genre_id: number
): Promise<movies> {
  return await prisma.movies.findFirst({
    where: {
      AND: [{ name }, { streaming_service_id }, { genre_id }],
    },
  });
}

async function createMovie(
  name: string,
  streaming_service_id: number,
  genre_id: number
): Promise<movies> {
  return await prisma.movies.create({
    data: {
      name,
      streaming_service_id,
      genre_id,
    },
  });
}

async function selectMovies(): Promise<Movies[]> {
  return await prisma.movies.findMany({
    select: {
      id: true,
      name: true,
      streaming_services: {
        select: {
          name: true,
        },
      },
      movie_genres: {
        select: {
          name: true,
        },
      },
      watched: true,
      date_watched: true,
      rating: true,
      created_at: true,
    },
  });
}

async function selectMovieById(id: number): Promise<movies> {
  return await prisma.movies.findUnique({
    where: { id },
  });
}

async function deleteMovieById(id: number): Promise<movies> {
  return prisma.movies.delete({
    where: { id },
  });
}

async function updateMovieById(
  id: number,
  rating: number,
  date_watched: string
): Promise<movies> {
  return await prisma.movies.update({
    where: { id },
    data: {
      watched: true,
      date_watched,
      rating,
    },
  });
}

async function selectMoviesByGenre(genre_id: number): Promise<Movies[]> {
  return prisma.movies.findMany({
    where: { genre_id },
    select: {
      id: true,
      name: true,
      streaming_services: {
        select: {
          name: true,
        },
      },
      movie_genres: {
        select: {
          name: true,
        },
      },
      watched: true,
      date_watched: true,
      rating: true,
      created_at: true,
    },
  });
}

const moviesRepositoy = {
  selectMoviesByInfos,
  createMovie,
  selectMovies,
  selectMovieById,
  deleteMovieById,
  updateMovieById,
  selectMoviesByGenre,
};

export default moviesRepositoy;
