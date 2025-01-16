import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { LoggerModule } from 'nestjs-pino';

import { configuration } from './config/configuration';
import loggerModuleParams from './logger/logger-module-params';
import { AiAskModule } from './modules/ai-ask/ai-ask.module';
import { AiPresentationModule } from './modules/ai-presentation/ai-presentation.module';
import { AiSlideModule } from './modules/ai-slide/ai-slide.module';
import { OpenAiModule } from './modules/openai/openai.module';
import { RequestIdHeaderMiddleware } from './shared/middlewares/request-id-header.middleware';
import { HttpRequestContextMiddleware } from './shared/modules/http-request-context/http-request-context.middleware';
import { HttpRequestContextModule } from './shared/modules/http-request-context/http-request-context.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
      envFilePath: ['.env'],
    }),
    LoggerModule.forRootAsync(loggerModuleParams),
    OpenAiModule,
    AiAskModule,
    AiPresentationModule,
    AiSlideModule,
    // Global modules
    HttpRequestContextModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(RequestIdHeaderMiddleware, HttpRequestContextMiddleware).forRoutes('*');
  }
}
