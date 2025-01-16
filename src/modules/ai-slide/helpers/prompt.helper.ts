import {
  PROMPT_CREATE_LEFT_IMAGE_SLIDE,
  PROMPT_CREATE_RIGHT_IMAGE_SLIDE,
  PROMPT_CREATE_TEXT_SLIDE,
  PROMPT_CREATE_TITLE_SLIDE,
} from '../constants.ts/prompts.constants';
import { SlideType } from '../constants.ts/slide-type.constant';

export const generateSlidePrompt = (slideId: string, title: string, description: string) => {
  const promptTemplate = {
    [SlideType.TITLE]: PROMPT_CREATE_TITLE_SLIDE,
    [SlideType.LEFT_IMAGE_TEXT]: PROMPT_CREATE_LEFT_IMAGE_SLIDE,
    [SlideType.RIGHT_IMAGE_TEXT]: PROMPT_CREATE_RIGHT_IMAGE_SLIDE,
    [SlideType.TEXT]: PROMPT_CREATE_TEXT_SLIDE,
  };
  return {
    prompt: `
        This is the title: ${title}
        This is the description: ${description}
        Please generate the slide content based on the title and description using the prompt template below.
        This is the prompt template: ${promptTemplate[slideId as SlideType]} 
    `,
  };
};

export const remixSlidePrompt = (slideId: string, previousContent: string) => {
  const promptTemplate = {
    [SlideType.TITLE]: PROMPT_CREATE_TITLE_SLIDE,
    [SlideType.LEFT_IMAGE_TEXT]: PROMPT_CREATE_LEFT_IMAGE_SLIDE,
    [SlideType.RIGHT_IMAGE_TEXT]: PROMPT_CREATE_RIGHT_IMAGE_SLIDE,
    [SlideType.TEXT]: PROMPT_CREATE_TEXT_SLIDE,
  };
  return {
    prompt: `
        This is the previous content: ${previousContent}
        Please remix the content to create a new slide based on the previous content using the prompt template below.
        This is the prompt template: ${promptTemplate[slideId as SlideType]} 
    `,
  };
};
