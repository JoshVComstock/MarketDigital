import { ERROR_STATUS } from "../../constants/ERROR";
import { ERROR_MESSAGES } from "../../constants/MESSAGES";
import { ERROR_NAME } from "../../types/error";
import { ApiResponse } from "../../types/http";

export const handleSuccess = <T>(
  message: string,
  data?: T
): ApiResponse<T> => ({
  success: true,
  message,
  data,
});

export const handleError = (
  code: ERROR_NAME,
  message?: string,
  details?: any
): ApiResponse => ({
  success: false,
  message: ERROR_MESSAGES[code],
  error: {
    code,
    status: ERROR_STATUS[code],
    details,
    message: message ?? ERROR_MESSAGES[code],
  },
});
