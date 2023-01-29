import { connection } from "../../database/db";
import { StreamingService } from "../../protocols";
import { QueryResult } from "pg";

async function selectStreamingServices(): Promise<
  QueryResult<StreamingService>
> {
  return await connection.query(
    `
        SELECT 
            id AS streaming_service_id, 
            name AS streaming_service_name 
        FROM streaming_services;
        `
  );
}

async function selectStreamingServiceById(
  streaming_service_id: number
): Promise<QueryResult<StreamingService>> {
  return await connection.query(
    `
        SELECT 
          id AS streaming_service_id, 
          name AS streaming_service_name 
        FROM movie_genres
        WHERE id = $1;
        `,
    [streaming_service_id]
  );
}

const streamingServicesRepositoy = {
  selectStreamingServices,
  selectStreamingServiceById,
};

export default streamingServicesRepositoy;
