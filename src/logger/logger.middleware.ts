import { BadRequestException, UnauthorizedException } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

export function logger(req: Request, res: Response, next: NextFunction) {
  
  next();
};