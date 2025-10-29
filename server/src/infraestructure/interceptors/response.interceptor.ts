import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { map } from 'rxjs';

@Injectable()
export class ResponseInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler) {
    return next.handle().pipe(
      map((response) => {
        const { message = 'Success', data = response } =
          typeof response === 'object' ? response : { data: response };

        return {
          ok: true,
          message,
          data,
        };
      }),
    );
  }
}
