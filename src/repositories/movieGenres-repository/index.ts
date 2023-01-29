import { connection } from "../../database/db";
import { MovieGenre } from "../../protocols";
import { QueryResult } from "pg";

async function selectMovieGenres(): Promise<QueryResult<MovieGenre>> {
  return await connection.query(
    `
        SELECT 
            id AS movie_genre_id, 
            name AS movie_genre_name 
        FROM movie_genres;
        `
  );
}

async function selectMovieGenreById(
  genre_id: number
): Promise<QueryResult<MovieGenre>> {
  return await connection.query(
    `
        SELECT 
          id AS movie_genre_id, 
          name AS movie_genre_name 
        FROM movie_genres
        WHERE id = $1;
        `,
    [genre_id]
  );
}

const movieGenresRepositoy = {
  selectMovieGenres,
  selectMovieGenreById,
};

export default movieGenresRepositoy;
