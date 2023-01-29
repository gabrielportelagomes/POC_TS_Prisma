import { Error } from "../protocols";

export function notFoundError(): Error {
  return {
    name: "NotFoundError",
    message: "No result for this search!",
  };
}
