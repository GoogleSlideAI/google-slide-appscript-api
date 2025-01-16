import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { GoogleOauth2Service } from './google-oauth2.service';

@Module({
  imports: [ConfigModule],
  providers: [GoogleOauth2Service],
  exports: [GoogleOauth2Service],
})
export class GoogleModule {}
