import { NextFunction, Request, Response } from "express";
import { ZodType } from "zod";
import { ValidationError } from "../shared/utils/error/handleError";

export const validateSchema =
  (schema: ZodType<any>, type: "body" | "query" = "body") =>
  (req: Request, res: Response, next: NextFunction) => {
    try {
      const valueToValidate = type === "body" ? req.body : req.query;
      const parsed = schema.safeParse(valueToValidate);

      if (!parsed.success) {
        return next(new ValidationError(parsed.error!.issues));
      }
      if (type === "body") req.body = parsed.data;
      if (type === "query") req.query = parsed.data;
      next();
    } catch (error) {
      next(error);
    }
  };
