# POC_TypeScript (Wishlist)

An application to control your movie wish list.

## How to run for development

1. Clone this repository
2. Install all dependencies

```
npm i
```

3. Create a PostgresQL database using the provided dump
4. Run the back-end

```
npm run dev
```

## Routes

### Movie Genres

- **GET ("/movie-genres")**
  Get all the movie genres.
  &nbsp;
  Response format:

  ```
  [
    {
    "movie_genre_id": 1,
    "movie_genre_name": "Drama"
    }
  ]
  ```

### Streaming Services

- **GET ("/streaming-services")**
  Get all the streaming services.
  &nbsp;
  Response format:

  ```
  [
    {
    "streaming_service_id": 1,
    "streaming_service_name": "Netflix"
    }
  ]
  ```

### Movies Routes

- **GET("/movies")**
  Get all the movies.
  &nbsp;
  Response format:

  ```
  [
    {
    "id": 1,
    "name": "Mad Max: Estrada da Fúria",
    "streamign_service": "HBO Max",
    "genre": "Ação",
    "watched": true,
    "date_watched": "23/01/2023",
    "rating": 5,
    "created_at": "2023-01-23T17:13:47.514Z"
    }
  ]
  ```

- **POST("/movies")**
  Post a new movie.
  &nbsp;
  Body format:

  ```
  [
    {
    "name": "Mad Max: Estrada da Fúria",
    "streaming_service_id": 2,
    "genre_id": 6
    }
  ]
  ```

- **PATCH("/movies/:id")**
  Updates watched status and movie rating by movie id.
  &nbsp;
  Body format:

  ```
  [
    {
    "rating": 5
    }
  ]
  ```

- **DELETE("/movies/:id")**
  Delete movie by movie id.
  &nbsp;

- **GET("/movies/genre/:id")**
  Get all movies by genre.
  &nbsp;
  Response format:

  ```
  [
    {
    "id": 1,
    "name": "Mad Max: Estrada da Fúria",
    "streamign_service": "HBO Max",
    "genre": "Ação",
    "watched": true,
    "date_watched": "23/01/2023",
    "rating": 5,
    "created_at": "2023-01-23T17:13:47.514Z"
    }
  ]
  ```
