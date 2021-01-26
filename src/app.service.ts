/** ~/src/app.service.ts
 * Nest Samples
 *
 * Kyle Halek
 * LahkLeKey@gmail.com
 *
 * Providers are a fundamental concept in Nest. Many of the basic Nest
 * classes may be treated as a provider – services, repositories, factories,
 * helpers, and so on. The main idea of a provider is that it can inject
 * dependencies; this means objects can create various relationships with
 * each other, and the function of "wiring up" instances of objects can
 * largely be delegated to the Nest runtime system.
 *
 * A provider is simply a class annotated with an @Injectable() decorator.
 *
 * To create a service using the CLI, simply execute in CLI
 * nest g service SERVICENAME
 *
 * https://docs.nestjs.com/providers
 */

import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello from app.service.ts';
  }
}
