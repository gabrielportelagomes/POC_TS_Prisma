import { CreateMovie, MovieIdParam, MovieRating } from "../protocols";
import Joi from "joi";

export const createMovieSchema = Joi.object<CreateMovie>({
  name: Joi.string().min(3).required(),
  streaming_service_id: Joi.number().integer().required(),
  genre_id: Joi.number().integer().required(),
});

export const movieIdSchema = Joi.object<MovieIdParam>({
  id: Joi.string().min(1).required(),
});

export const movieRatingSchema = Joi.object<MovieRating>({
  rating: Joi.number().integer().min(0).max(5).required(),
});
