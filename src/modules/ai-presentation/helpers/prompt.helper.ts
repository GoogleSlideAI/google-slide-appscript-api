import { PROMPT_GENERATE_OUTLINE, PROMPT_GENERATE_SLIDES } from '../constants/prompt.constants';

export const generateOutlinePrompt = (
  title: string,
  description: string,
  numberOfSlides: number,
  presentationType: string,
  audience: string,
  toneOfVoice: string
) => {
  return {
    prompt: `
        The title of the presentation is: ${title}
        The description of the presentation is: ${description}
        The number of slides is: ${numberOfSlides}
        The presentation type is: ${presentationType}
        The audience is: ${audience}
        The tone of voice is: ${toneOfVoice}
        ${PROMPT_GENERATE_OUTLINE}
        `,
  };
};

export const generatePresentationPrompt = (outline: string) => {
  return {
    prompt: `
        The outline content of the presentation is: ${outline}
        Now your task is deciding which slides styles to use but overall the presentation should be consistent and seamless. Please generate the slides for the presentation from the requirements below.
        ${PROMPT_GENERATE_SLIDES}
        `,
  };
};
