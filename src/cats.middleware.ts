import { Injectable, Logger, NestMiddleware } from '@nestjs/common';

@Injectable()
export class CatsMiddleware implements NestMiddleware {
  private readonly logger = new Logger(CatsMiddleware.name);

  use(req: any, res: any, next: () => void) {
    this.logger.log('Middleware');
    next();
  }
}
