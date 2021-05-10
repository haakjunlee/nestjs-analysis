import {
  CallHandler,
  ExecutionContext,
  Injectable,
  Logger,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class CatsInterceptor implements NestInterceptor {
  private readonly logger = new Logger(CatsInterceptor.name);
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    this.logger.log('Cats Interceptor');
    return next.handle();
  }
}
