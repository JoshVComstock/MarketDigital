import { ERROR_MESSAGE, ERROR_NAME } from "../../types/error";
import { HTTP_STATUS_CODE } from "../../types/http";

export class AppError extends Error {
  public readonly code: ERROR_NAME;
  public readonly status: HTTP_STATUS_CODE;
  public readonly details?: any;
  public readonly message: ERROR_MESSAGE;

  constructor(
    code: ERROR_NAME,
    status: HTTP_STATUS_CODE,
    message: ERROR_MESSAGE,
    details?: any
  ) {
    super(code);
    this.code = code;
    this.status = status;
    this.details = details;
    this.message = message;
    Object.setPrototypeOf(this, AppError.prototype);
  }
}
