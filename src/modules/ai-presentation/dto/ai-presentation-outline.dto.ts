import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class AiPresentationOutlineDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsNumber()
  @IsNotEmpty()
  numberOfSlides: number;

  @IsString()
  @IsNotEmpty()
  presentationType: string;

  @IsString()
  @IsNotEmpty()
  audience: string;

  @IsString()
  @IsNotEmpty()
  toneOfVoice: string;

  @IsOptional()
  @IsString()
  model?: string;
}
