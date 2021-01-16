/** ~/src/app.controller.ts
 * Nest Samples
 *
 * Kyle Halek
 * LahkLeKey@gmail.com
 *
 * Controllers are responsible for handling incoming requests and returning
 * responses to the client.
 *
 * A controller's purpose is to receive specific requests for the
 * application.
 *
 * The routing mechanism controls which controller receives which requests.
 * Frequently, each controller has more than one route, and different routes
 * can perform different actions.
 *
 * In order to create a basic controller, we use classes and decorators.
 * Decorators associate classes with required metadata and enable Nest to
 * create a routing map (tie requests to the corresponding controllers).
 *
 * https://docs.nestjs.com/controllers
 */

import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
