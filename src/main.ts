import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';
import { EntityNotFoundExceptionFilter } from './exception-filters/entity-not-found.exception-filters';
import { logger } from './logger/logger.middleware';
import validationError from './validation-pipes/validation-pipe-filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({exceptionFactory: validationError}));
  app.useGlobalFilters(new EntityNotFoundExceptionFilter())
  app.use(logger)
  
  await app.listen(3000)
}
bootstrap();
