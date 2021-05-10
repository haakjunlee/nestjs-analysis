import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  BadGatewayException,
  CallHandler,
  HttpException,
  HttpStatus,
  Logger,
} from '@nestjs/common';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ErrorsInterceptor implements NestInterceptor {
  private readonly logger = new Logger(ErrorsInterceptor.name);
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    this.logger.log('Errors Interceptor');
    return next
      .handle()
      .pipe(
        catchError((err) =>
          throwError(new HttpException('teapot', HttpStatus.I_AM_A_TEAPOT)),
        ),
      );
    //.pipe(catchError((err) => throwError(new BadGatewayException())));
  }
}
