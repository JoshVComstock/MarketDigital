import { HTTP_STATUS } from "../constants/HTTP_STATUS";
export type HTTP_STATUS_CODE = (typeof HTTP_STATUS)[keyof typeof HTTP_STATUS];
export type HTTP_STATUS_NAME = keyof typeof HTTP_STATUS;
