import { NextFunction, Request, Response } from 'express';
import { HttpException } from '../exceptions/http.exception';

export const errorMiddleware = (
  err: HttpException,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const status = err.status || 500;
  const message = err.message || 'Something went wrong';
  res.status(status).send({ message, status });
};
