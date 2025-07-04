import { Global, Module } from '@nestjs/common';

import { HttpRequestContextMiddleware } from '../../modules/http-request-context/http-request-context.middleware';
import { HttpRequestContextService } from '../../modules/http-request-context/http-request-context.service';

@Global()
@Module({
  providers: [HttpRequestContextService, HttpRequestContextMiddleware],
  exports: [HttpRequestContextService, HttpRequestContextMiddleware],
})
export class HttpRequestContextModule {}
