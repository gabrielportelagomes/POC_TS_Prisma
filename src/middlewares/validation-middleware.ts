import { NextFunction, Request, Response } from "express";
import { ObjectSchema } from "joi";

export function validateBody<T>(
  schemaParam: ObjectSchema<T>
): ValidationMiddleware {
  return validate(schemaParam, "body");
}

export function validateParams<T>(
  schemaParam: ObjectSchema<T>
): ValidationMiddleware {
  return validate(schemaParam, "params");
}

type ValidationMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => void;

function validate(schema: ObjectSchema, type: "body" | "params") {
  return (req: Request, res: Response, next: NextFunction) => {
    const { error } = schema.validate(req[type], { abortEarly: false });

    if (error) {
      const erros = error.details.map((detail) => detail.message);

      return res.status(422).send(erros);
    }

    next();
  };
}
