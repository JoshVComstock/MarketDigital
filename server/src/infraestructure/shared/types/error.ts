import { ERROR_MESSAGES } from "../constants/MESSAGES";
import { HTTP_STATUS_CODE } from "./http";
export type ERROR_NAME = keyof typeof ERROR_MESSAGES;
export type ERROR_MESSAGE = (typeof ERROR_MESSAGES)[ERROR_NAME];
export interface ResponseError {
  code: ERROR_NAME;
  status: HTTP_STATUS_CODE;
  message: ERROR_MESSAGE | string;
  details: any;
}
