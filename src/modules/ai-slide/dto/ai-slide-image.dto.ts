import { IsNotEmpty, IsString } from 'class-validator';

export class AiSlideImageDto {
  @IsString()
  @IsNotEmpty()
  prompt: string;
}
