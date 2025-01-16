import { IsString } from 'class-validator';
import { IsNotEmpty } from 'class-validator';

export class AiSlideEvaluateDto {
  @IsString()
  @IsNotEmpty()
  slideContent: string;
}
