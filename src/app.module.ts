/** ~/src/app.module.ts
 * Nest Samples
 *
 * Kyle Halek
 * LahkLeKey@gmail.com
 *
 * A module is a class annotated with a @Module() decorator. The @Module()
 * decorator provides metadata that Nest makes use of to organize the
 * application structure.
 *
 * Each application has at least one module, a root module. The root module
 * is the starting point Nest uses to build the application graph - the
 * internal data structure Nest uses to resolve module and provider
 * relationships and dependencies.
 *
 * While very small applications may theoretically have just the root
 * module, this is not the typical case. We want to emphasize that modules
 * are strongly recommended as an effective way to organize your components.
 *
 * Thus, for most applications, the resulting architecture will employ
 * multiple modules, each encapsulating a closely related set of
 * capabilities.
 *
 * The module encapsulates providers by default. This means that it's
 * impossible to inject providers that are neither directly part of the
 * current module nor exported from the imported modules. Thus, you may
 * consider the exported providers from a module as the module's public
 * interface, or API.
 *
 * https://docs.nestjs.com/modules
 */

import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoggerMiddleware } from './middleware/logger';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [AuthModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('/');
  }
}
