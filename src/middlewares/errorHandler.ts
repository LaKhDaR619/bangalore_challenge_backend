import { Request, Response, NextFunction } from 'express';

export default (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction,
): any => {
  console.error(err);
  return res.status(500).json({ error: { message: 'something went wrong' } });
};
