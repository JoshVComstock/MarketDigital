import { HTTP_STATUS } from "../constants/HTTP_STATUS";
import { ResponseError } from "./error";
export type HTTP_STATUS_CODE = (typeof HTTP_STATUS)[keyof typeof HTTP_STATUS];
export type HTTP_STATUS_NAME = keyof typeof HTTP_STATUS;

export interface ApiResponse<T = any> {
  success: boolean;
  message: string;
  data?: T | undefined;
  error?: ResponseError;
}
