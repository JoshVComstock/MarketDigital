import { ERROR_NAME } from "../shared/types/error";

declare global {
  namespace Express {
    interface Response {
      success: <T>(message: string, data?: T) => Response;
      failure: (code: ERROR_NAME, details?: any, message?: string) => Response;
    }
  }
}
