import { Body, Controller, Post } from '@nestjs/common';

import { AiSlideCreateDto } from './dto/ai-slide-create.dto';
import { AiSlideImageDto } from './dto/ai-slide-image.dto';
import { AiSlideRemixDto } from './dto/ai-slide-remix.dto';
import { AiSlideService } from './ai-slide.service';

@Controller('ai-slide')
export class AiSlideController {
  constructor(private readonly aiSlideService: AiSlideService) {}

  @Post('create')
  async aiSlideCreate(@Body() aiSlideCreateDto: AiSlideCreateDto) {
    return this.aiSlideService.aiSlideCreate(aiSlideCreateDto);
  }

  @Post('remix')
  async aiSlideRemix(@Body() aiSlideRemixDto: AiSlideRemixDto) {
    return this.aiSlideService.aiSlideRemix(aiSlideRemixDto.slideId, aiSlideRemixDto.previousContent);
  }

  @Post('image')
  async aiSlideImage(@Body() aiSlideImageDto: AiSlideImageDto) {
    return this.aiSlideService.aiSlideImage(aiSlideImageDto.prompt);
  }
}
