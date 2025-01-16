import { Injectable } from '@nestjs/common';

import { OpenAIService } from '../openai/openai.service';

import { AiSlideCreateDto } from './dto/ai-slide-create.dto';
import { generateSlidePrompt, remixSlidePrompt } from './helpers/prompt.helper';

@Injectable()
export class AiSlideService {
  constructor(private readonly openaiService: OpenAIService) {}

  async aiSlideCreate(dto: AiSlideCreateDto) {
    const prompt = generateSlidePrompt(dto.slideId, dto.title, dto.description);
    const response = await this.openaiService.generateCompletion(prompt.prompt);
    return response;
  }

  async aiSlideRemix(slideId: string, previousContent: string) {
    const prompt = remixSlidePrompt(slideId, previousContent);
    const response = await this.openaiService.generateCompletion(prompt.prompt);
    return response;
  }

  async aiSlideImage(prompt: string) {
    const response = await this.openaiService.generateImage(prompt);

    return response;
  }
}
