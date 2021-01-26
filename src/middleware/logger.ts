/** ~/src/middleware/logger.ts
 * Nest Samples
 *
 * Kyle Halek
 * LahkLeKey@gmail.com
 *
 * Simple logger middleware for testing purposes.
 * Will simply take the response body and then print it to console.
 *
 * Usage example:
 *  Apply to module configuration. ~.module.ts
 *
 * export class AppModule implements NestModule {
 *   configure(consumer: MiddlewareConsumer) {
 *     consumer.apply(LoggerMiddleware).forRoutes('/');
 *   }
 * }
 */

import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';

/**
 * Prints the request body to console.
 */
@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: Function) {
    console.log(
      `Hello from LoggerMiddleware req : ${JSON.stringify(req.body, null, 2)}`,
    );
    next();
  }
}
