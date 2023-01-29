import { Request, Response } from "express";
import movieGenresRepositoy from "../repositories/movieGenres-repository";

export async function getMovieGenres(req: Request, res: Response) {
  try {
    const result = await movieGenresRepositoy.selectMovieGenres();

    const movieGenres = result.rows;

    return res.status(200).send(movieGenres);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}