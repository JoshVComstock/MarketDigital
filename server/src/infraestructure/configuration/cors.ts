import { CORS } from "../shared/constants/cors";
import { PermissionDeniedError } from "../shared/utils/error/handleError";
import { CorsOptions } from "cors";

export const configureCors: CorsOptions = {
  origin: (origin, callback) => {
    if (!origin) return callback(null, true);
    if (CORS.includes(origin)) {
      callback(null, true);
    } else {
      callback(new PermissionDeniedError());
    }
  },
  credentials: true,
};
