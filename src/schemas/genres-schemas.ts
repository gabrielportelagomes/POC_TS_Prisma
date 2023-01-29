import { GenreIdParam } from "../protocols";
import Joi from "joi";

export const genreIdSchema = Joi.object<GenreIdParam>({
    id: Joi.string().min(1).required(),
  });
  