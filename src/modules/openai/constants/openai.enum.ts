export enum GenerativeAiModel {
  CLAUDE_3_HAIKU = 'claude-3-haiku-20240307',
  CLAUDE_3_OPUS = 'claude-3-opus-20240229',
  CLAUDE_3_SONNET = 'claude-3-sonnet-20240229',
  CLAUDE_35_SONNET = 'claude-3-5-sonnet-20240620',
  GEMINI_10_PRO = 'gemini-1.0-pro-latest',
  GEMINI_15_FLASH = 'gemini-1.5-flash-latest',
  GEMINI_15_PRO = 'gemini-1.5-pro-latest',
  GPT_35 = 'gpt-3.5-turbo',
  GPT_40_TURBO = 'gpt-4-turbo',
  GPT_45 = 'gpt-4.5',
  GPT_4O = 'gpt-4o',
  GPT_4O_MINI = 'gpt-4o-mini',
  KNOWLEDGE_BASE = 'knowledge-base',
}

export enum GenerativeAiRole {
  MODEL = 'model',
  SYSTEM = 'system',
  USER = 'user',
}

export enum GenerativeAiTrimmingStrategy {
  START = 'start',
  MIDDLE = 'middle',
  END = 'end',
}

export enum GenerativeAiResponseFormat {
  JSON = 'json',
  TEXT = 'text',
}

export enum GenerativeAiRequestPriority {
  HIGH = 'high',
  LOW = 'low',
}

export enum GenerativeAiImageModel {
  DALL_E_2 = 'dall-e-2',
  DALL_E_3 = 'dall-e-3',
}

export enum GenerativeAiImageSize {
  SIZE_256 = '256x256',
  SIZE_512 = '512x512',
  SIZE_1024 = '1024x1024',
  SIZE_1024_1792 = '1024x1792',
  SIZE_1792_1024 = '1792x1024',
}
