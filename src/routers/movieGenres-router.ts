import { getMovieGenres } from "../controllers";
import { Router } from "express";

const movieGenresRouter = Router();

movieGenresRouter.get("/", getMovieGenres);

export { movieGenresRouter };
