import movieGenresService from "../services/movieGenres-service";
import { Request, Response } from "express";

export async function getMovieGenres(req: Request, res: Response) {
  try {
    const result = await movieGenresService.getMovieGenres();

    const movieGenres = result;

    return res.status(200).send(movieGenres);
  } catch (error) {
    console.log(error);
    if (error.name === "NotFoundError") {
      return res.status(500).send(error.message);
    }
    res.sendStatus(500);
  }
}
