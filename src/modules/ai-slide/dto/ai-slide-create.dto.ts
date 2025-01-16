import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class AiSlideCreateDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsOptional()
  description: string;

  @IsString()
  @IsNotEmpty()
  slideId: string;
}
