import { Module } from '@nestjs/common';

import { OpenAiModule } from '../openai/openai.module';

import { AiPresentationController } from './ai-presentation.controller';
import { AiPresentationService } from './ai-presentation.service';

@Module({
  imports: [OpenAiModule],
  controllers: [AiPresentationController],
  providers: [AiPresentationService],
})
export class AiPresentationModule {}
