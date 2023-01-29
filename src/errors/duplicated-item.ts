import { Error } from "../protocols";

export function duplicatedItem(): Error {
    return {
      name: "DuplicatedItem",
      message: "Item already registered",
    };
  }