import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Logger,
  Param,
  UseFilters,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { AppService } from './app.service';
import { CatsGuard } from './cats.guard';
import { CatsInterceptor } from './cats.interceptor';
import { CatsPipe } from './cats.pipe';
import { ErrorsInterceptor } from './errors.interceptor';
import { HttpExceptionFilter } from './http-exception.filter';
import { TransformInterceptor } from './transform.interceptor';

@Controller()
export class AppController {
  private readonly logger = new Logger(AppController.name);

  constructor(private readonly appService: AppService) {}

  @UseGuards(CatsGuard)
  @UseInterceptors(ErrorsInterceptor, CatsInterceptor, TransformInterceptor)
  @UseFilters(HttpExceptionFilter)
  @Get('cats/:id')
  getCats(@Param('id', CatsPipe) id: number) {
    this.logger.log('Controller');
    //return 'meow';
    throw new HttpException(
      {
        status: HttpStatus.FORBIDDEN,
        error: 'This is a custom message',
      },
      HttpStatus.FORBIDDEN,
    );
  }
}
