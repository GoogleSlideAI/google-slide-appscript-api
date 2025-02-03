import { IsNotEmpty, IsString } from 'class-validator';

export class AiPresentationSummariesDto {
  @IsString()
  @IsNotEmpty()
  content: string;
}
