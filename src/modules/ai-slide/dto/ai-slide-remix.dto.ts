import { IsNotEmpty, IsString } from 'class-validator';

export class AiSlideRemixDto {
  @IsString()
  @IsNotEmpty()
  previousContent: string;

  @IsString()
  @IsNotEmpty()
  slideId: string;
}
