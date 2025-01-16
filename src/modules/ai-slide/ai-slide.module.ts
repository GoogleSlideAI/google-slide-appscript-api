import { Module } from '@nestjs/common';

import { OpenAiModule } from '../openai/openai.module';

import { AiSlideController } from './ai-slide.controller';
import { AiSlideService } from './ai-slide.service';

@Module({
  imports: [OpenAiModule],
  controllers: [AiSlideController],
  providers: [AiSlideService],
})
export class AiSlideModule {}
