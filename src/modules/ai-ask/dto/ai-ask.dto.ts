import { IsOptional, IsString } from 'class-validator';

export class AiAskDto {
  @IsString()
  prompt: string;

  @IsOptional()
  @IsString()
  model?: string;
}
