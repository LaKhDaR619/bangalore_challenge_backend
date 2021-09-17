import { plainToClass } from 'class-transformer';
import { validate, ValidationError } from 'class-validator';
import { RequestHandler } from 'express';

function validationMiddleware(type: any): RequestHandler {
  return async (req, res, next): Promise<void> => {
    const errors: ValidationError[] = await validate(
      plainToClass(type, req.body),
    );

    if (errors.length > 0) {
      const message = errors
        .map((error: ValidationError) => Object.values(error.constraints || ''))
        .join(', ');

      res.status(400).json(message);
    } else {
      next();
    }
  };
}

export default validationMiddleware;
