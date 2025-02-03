import { Body, Controller, HttpException, HttpStatus, Post } from '@nestjs/common';

import { AiPresentationContentDto } from './dto/ai-presentation-content.dto';
import { AiPresentationOutlineDto } from './dto/ai-presentation-outline.dto';
import { AiPresentationSummariesDto } from './dto/ai-presentation-summaries.dto';
import { AiPresentationService } from './ai-presentation.service';

@Controller('ai-presentation')
export class AiPresentationController {
  constructor(private readonly aiPresentationService: AiPresentationService) {}

  @Post('outline')
  async generateOutline(@Body() aiPresentationOutlineDto: AiPresentationOutlineDto) {
    try {
      const outline = await this.aiPresentationService.generateOutline(aiPresentationOutlineDto);
      return { success: true, outline };
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Post('content')
  async generatePresentation(@Body() aiPresentationContentDto: AiPresentationContentDto) {
    try {
      const presentation = await this.aiPresentationService.generatePresentation(aiPresentationContentDto.outline);
      return { success: true, presentation };
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Post('summarize')
  async summarizePresentation(@Body() aiPresentationSummariesDto: AiPresentationSummariesDto) {
    const summary = await this.aiPresentationService.summariesPresentation(aiPresentationSummariesDto.content);
    return { success: true, summary };
  }
}
