import { Injectable } from '@nestjs/common';

import { OpenAIService } from '../openai/openai.service';

@Injectable()
export class AiAskService {
  constructor(private readonly openaiService: OpenAIService) {}

  async askQuestion(prompt: string, model?: string) {
    return this.openaiService.generateCompletion(prompt, model);
  }

  async generateImage(prompt: string) {
    return this.openaiService.generateImage(prompt);
  }
}
