# POC_TypeScript_Prisma (Wishlist)

An application to control your movie wish list.

## How to run for development

1. Clone this repository
2. Install all dependencies

```
npm i
```

3. Create a PostgreSQL database with whatever name you want
4. Configure the `.env` file using the `.env.example` file
5. Run all migrations

```
npm run migration:run
```

6. Seed db

```
npm run prisma:seed
```

7. Run the back-end

```
npm run dev
```

OBS: Import the collection through the "thunder-collection cars.json" file to test the routes in the Thunder Client

## Routes

### Movie Genres

- **GET ("/movie-genres")**
  Get all the movie genres.
  &nbsp;
  Response format:

  ```
  [
    {
    "id": 1,
    "name": "Drama",
    "created_at": "2023-01-23T16:34:23.703Z"
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
    "id": 1,
    "name": "Netflix",
    "created_at": "2023-01-23T16:32:16.959Z"
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
    "name": "Mad Max: Estrada da FúriaI",
    "streaming_services": {
      "name": "HBO Max"
    },
    "movie_genres": {
      "name": "Ação"
    },
    "watched": true,
    "date_watched": "23/01/2023",
    "rating": 5,
    "created_at": "2023-01-23T16:36:22.684Z"
    }
  ]
  ```

- **POST("/movies")**
  Post a new movie.
  &nbsp;
  Body format:

  ```
    {
    "name": "Mad Max: Estrada da Fúria",
    "streaming_service_id": 2,
    "genre_id": 6
    }
  ```

- **PATCH("/movies/:id")**
  Updates watched status and movie rating by movie id.
  &nbsp;
  Body format:

  ```
    {
    "rating": 5
    }
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
    "name": "Mad Max: Estrada da FúriaI",
    "streaming_services": {
      "name": "HBO Max"
    },
    "movie_genres": {
      "name": "Ação"
    },
    "watched": true,
    "date_watched": "23/01/2023",
    "rating": 5,
    "created_at": "2023-01-23T16:36:22.684Z"
    }
  ]
  ```
