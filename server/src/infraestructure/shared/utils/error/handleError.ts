import { ERROR_MESSAGES } from "../../constants/ERRORS";
import { HTTP_STATUS } from "../../constants/HTTP_STATUS";
import { AppError } from "./appError";

export class ValidationError extends AppError {
  constructor(details?: any) {
    super(
      "VALIDATION_ERROR",
      HTTP_STATUS.VALIDATE,
      ERROR_MESSAGES.VALIDATION_ERROR,
      { details }
    );
  }
}

export class NotFoundError extends AppError {
  constructor(resource: string) {
    super("NOT_FOUND", HTTP_STATUS.NOT_FOUND, ERROR_MESSAGES.NOT_FOUND, {
      resource,
    });
  }
}

export class UnauthorizedError extends AppError {
  constructor() {
    super(
      "UNAUTHORIZED",
      HTTP_STATUS.UNAUTHORIZED,
      ERROR_MESSAGES.UNAUTHORIZED
    );
  }
}

export class AuthError extends AppError {
  constructor() {
    super("AUTH_ERROR", HTTP_STATUS.FORBIDDEN, ERROR_MESSAGES.AUTH_ERROR);
  }
}

export class PermissionDeniedError extends AppError {
  constructor() {
    super(
      "PERMISSION_DENIED",
      HTTP_STATUS.FORBIDDEN,
      ERROR_MESSAGES.PERMISSION_DENIED
    );
  }
}

export class ConflictError extends AppError {
  constructor(resource?: string) {
    super(
      "CONFLICT",
      HTTP_STATUS.CONFLICT,
      ERROR_MESSAGES.CONFLICT,
      resource ? { resource } : undefined
    );
  }
}

export class BadRequestError extends AppError {
  constructor(details?: any) {
    super(
      "BAD_REQUEST",
      HTTP_STATUS.BAD_REQUEST,
      ERROR_MESSAGES.BAD_REQUEST,
      details
    );
  }
}

export class ServerError extends AppError {
  constructor(details?: any) {
    super(
      "SERVER_ERROR",
      HTTP_STATUS.INTERNAL_SERVER,
      ERROR_MESSAGES.SERVER_ERROR,
      details
    );
  }
}
