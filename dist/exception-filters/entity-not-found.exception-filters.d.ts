import { ExceptionFilter, ArgumentsHost } from '@nestjs/common';
import { Response } from 'express';
import { EntityNotFoundError } from 'typeorm/error/EntityNotFoundError';
export declare class EntityNotFoundExceptionFilter implements ExceptionFilter {
    catch(exception: EntityNotFoundError, host: ArgumentsHost): Response<any, Record<string, any>>;
}
