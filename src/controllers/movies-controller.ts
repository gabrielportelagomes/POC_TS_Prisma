import moviesService from "../services/movies-service";
import { Request, Response } from "express";
import {
  CreateMovie,
  GenreIdParam,
  MovieIdParam,
  MovieRating,
} from "../protocols";
import dayjs from "dayjs";

export async function postMovie(req: Request, res: Response) {
  const { name, streaming_service_id, genre_id } = req.body as CreateMovie;
  try {
    await moviesService.postMovie(name, streaming_service_id, genre_id);

    return res.sendStatus(201);
  } catch (error) {
    if (error.name === "DuplicatedItem") {
      return res.status(500).send(error.message);
    }
    if (error.name === "NotFoundError") {
      return res.status(500).send(error.message);
    }
    return res.sendStatus(500);
  }
}

export async function getMovies(req: Request, res: Response) {
  try {
    const movies = await moviesService.getMovies();

    return res.status(200).send(movies);
  } catch (error) {
    if (error.name === "NotFoundError") {
      return res.status(404).send(error.message);
    }
    return res.sendStatus(500);
  }
}

export async function deleteMovie(req: Request, res: Response) {
  const { id } = req.params as MovieIdParam;
  const movie_id: number = parseInt(id);

  try {
    await moviesService.deleteMovie(movie_id);

    return res.sendStatus(200);
  } catch (error) {
    if (error.name === "NotFoundError") {
      return res.status(404).send(error.message);
    }
    return res.sendStatus(500);
  }
}

export async function updateMovie(req: Request, res: Response) {
  const { id } = req.params as MovieIdParam;
  const { rating } = req.body as MovieRating;
  const movie_id: number = parseInt(id);

  const date_watched: string = dayjs().format("DD/MM/YYYY");

  try {
    await moviesService.updateMovie(movie_id, rating, date_watched);

    return res.sendStatus(200);
  } catch (error) {
    if (error.name === "NotFoundError") {
      return res.status(404).send(error.message);
    }
    return res.sendStatus(500);
  }
}

export async function getMoviesByGenre(req: Request, res: Response) {
  const { id } = req.params as GenreIdParam;

  const genre_id: number = parseInt(id);
  try {
    const movies = await moviesService.getMoviesByGenre(genre_id);

    return res.status(200).send(movies);
  } catch (error) {
    if (error.name === "NotFoundError") {
      return res.status(404).send(error.message);
    }
    return res.sendStatus(500);
  }
}
