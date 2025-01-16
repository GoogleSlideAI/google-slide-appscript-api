import { Body, Controller, HttpException, HttpStatus, Post } from '@nestjs/common';

import { AiAskDto } from './dto/ai-ask.dto';
import { AiAskService } from './ai-ask.service';

@Controller('ai-ask')
export class AiAskController {
  constructor(private readonly aiAskService: AiAskService) {}

  @Post('question')
  async askQuestion(@Body() aiAskDto: AiAskDto) {
    try {
      const response = await this.aiAskService.askQuestion(aiAskDto.prompt, aiAskDto.model);
      return { success: true, response };
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Post('image')
  async generateImage(@Body() aiAskDto: AiAskDto) {
    try {
      const imageUrl = await this.aiAskService.generateImage(aiAskDto.prompt);
      return { success: true, imageUrl };
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
