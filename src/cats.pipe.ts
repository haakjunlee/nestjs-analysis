import {
  ArgumentMetadata,
  Injectable,
  Logger,
  PipeTransform,
} from '@nestjs/common';

@Injectable()
export class CatsPipe implements PipeTransform {
  private readonly logger = new Logger(CatsPipe.name);
  transform(value: any, metadata: ArgumentMetadata) {
    this.logger.log('Pipe');
    return value;
  }
}
