import { NextFunction, Request, Response } from "express";
import { handleError, handleSuccess } from "../shared/utils/http/http";
import { ERROR_STATUS } from "../shared/constants/ERROR";
import { HTTP_STATUS } from "../shared/constants/HTTP_STATUS";
import { AppError } from "../shared/utils/error/appError";

export const responseMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.success = (message, data) =>
    res.status(HTTP_STATUS.OK).json(handleSuccess(message, data));
  next();
};
export const errorMiddleware = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof AppError) {
    return res
      .status(err.status)
      .json(handleError(err.code, err.message, err.details));
  }
  return res.status(HTTP_STATUS.INTERNAL_SERVER).json(
    handleError("SERVER_ERROR", "Ups... contactate con soporte", {
      stack: err.stack,
    })
  );
};
