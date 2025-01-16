import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import OpenAI from 'openai';

@Injectable()
export class OpenAIService {
  private openai: OpenAI;

  constructor(private configService: ConfigService) {
    this.openai = new OpenAI({
      apiKey: this.configService.get<string>('openAiApiKey'),
    });
  }

  async generateCompletion(prompt: string, model = 'gpt-4o-mini') {
    try {
      const completion = await this.openai.chat.completions.create({
        messages: [{ role: 'user', content: prompt }],
        model,
      });

      return completion.choices[0].message.content;
    } catch (error) {
      throw new Error(`OpenAI API Error: ${error.message}`);
    }
  }

  async generateImage(prompt: string) {
    prompt = prompt + ',digital art, 4k, highly detailed, storybook';
    try {
      const response = await this.openai.images.generate({
        model: 'dall-e-2',
        prompt,
        n: 1,
        size: '512x512',
      });

      return response.data[0].url;
    } catch (error) {
      throw new Error(`OpenAI Image Generation Error: ${error.message}`);
    }
  }
}
