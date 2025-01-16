import { Module } from '@nestjs/common';

import { OpenAiModule } from '../openai/openai.module';

import { AiAskController } from './ai-ask.controller';
import { AiAskService } from './ai-ask.service';

@Module({
  imports: [OpenAiModule],
  controllers: [AiAskController],
  providers: [AiAskService],
})
export class AiAskModule {}
