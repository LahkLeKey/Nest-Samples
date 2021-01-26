/** ~/src/main.ts
 * Nest Samples
 *
 * Kyle Halek
 * LahkLeKey@gmail.com
 *
 * Includes an async function, which will bootstrap our application
 *
 * To create a Nest application instance, we use the core NestFactory class.
 * NestFactory exposes a few static methods that allow creating an application
 * instance. The create() method returns an application object, which fulfills
 * the INestApplication interface
 *
 * Nest aims to be a platform-agnostic framework. Platform independence makes
 * it possible to create reusable logical parts that developers can take
 * advantage of across several different types of applications. Technically,
 * Nest is able to work with any Node HTTP framework once an adapter is
 * created. There are two HTTP platforms supported out-of-the-box: express and
 * fastify.
 *
 * In this example I opt to use NestExpressApplication as specified by
 * the type on create.
 *
 * https://docs.nestjs.com/first-steps
 */

import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';

/**
 * Creates a NestExpressApplication instance then starts the server on port 3000
 */
async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  await app.listen(3000);
}

bootstrap();
