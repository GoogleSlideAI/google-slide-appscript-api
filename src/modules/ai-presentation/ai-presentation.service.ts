import { Injectable } from '@nestjs/common';

import { OpenAIService } from '../openai/openai.service';

import { AiPresentationOutlineDto } from './dto/ai-presentation-outline.dto';
import { generatePresentationPrompt, generateSummarizePresentationPrompt } from './helpers/prompt.helper';
import { generateOutlinePrompt } from './helpers/prompt.helper';

@Injectable()
export class AiPresentationService {
  constructor(private readonly openaiService: OpenAIService) {}

  async generateOutline(dto: AiPresentationOutlineDto) {
    const { prompt: outlinePrompt } = generateOutlinePrompt(
      dto.title,
      dto.description,
      dto.numberOfSlides,
      dto.presentationType,
      dto.audience,
      dto.toneOfVoice
    );
    const outline = await this.openaiService.generateCompletion(outlinePrompt);
    return outline;
  }

  async generatePresentation(outline: string) {
    const { prompt: presentationPrompt } = generatePresentationPrompt(outline);
    const presentation = await this.openaiService.generateCompletion(presentationPrompt);
    return presentation;
  }

  async summariesPresentation(content: string) {
    const { prompt: summarizePresentationPrompt } = generateSummarizePresentationPrompt(content);
    const summary = await this.openaiService.generateCompletion(summarizePresentationPrompt);
    return summary;
  }
}
