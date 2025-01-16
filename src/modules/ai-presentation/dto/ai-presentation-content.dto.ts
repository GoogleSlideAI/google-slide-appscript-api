import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class AiPresentationContentDto {
  @IsString()
  @IsNotEmpty()
  outline: string;

  @IsOptional()
  @IsString()
  model?: string;
}
