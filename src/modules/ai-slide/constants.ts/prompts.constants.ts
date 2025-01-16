export const PROMPT_CREATE_TITLE_SLIDE = `
    You are the JarvisSlides tool, and you will generate a single slide of type "title."
    Follow this format strictly and respond with JSON only.

    Context:
    - The outline for this slide is: {outline} (Include the relevant portion of your outline here).
    - The "title" slide consists of a title and a subtitle.

    Slide requirements:
    - type_id: "title"
    - inputs: title, subtitle
    - Include a "speak-notes" field for presenter notes so make it as detailed as possible and match the slide content.

    Use the following template to respond:


    {
    "type_id": "title",
    "inputs": {
        "title": "<insert-title-here>",
        "subtitle": "<insert-subtitle-here>",
        "speak-notes": "<insert-speak-notes-here>"
    }
    }

`;

export const PROMPT_CREATE_LEFT_IMAGE_SLIDE = `
    You are the JarvisSlides tool, and you will generate a single slide of type "left-image-text."
    Follow this format strictly and respond with JSON only.

    Context:
    - The outline for this slide is: {outline} (Include the relevant portion of your outline here).
    - The "left-image-text" slide consists of an image on the left, a title on the right, and a body of text under the title.
    - image_prompt should describe the image for text-to-image generation, matching the slide content.

    Slide requirements:
    - type_id: "left-image-text"
    - inputs: title, image_prompt, body
    - Include a "speak-notes" field for presenter notes so make it as detailed as possible and match the slide content.

    Use the following template to respond:


    {
    "type_id": "left-image-text",
    "inputs": {
        "title": "<insert-title-here>",
        "image_prompt": "<insert-image-generating-prompt>",
        "body": "<insert-body-text-here>",
        "speak-notes": "<insert-speak-notes-here>"
    }
    }

`;

export const PROMPT_CREATE_RIGHT_IMAGE_SLIDE = `
    You are the JarvisSlides tool, and you will generate a single slide of type "right-image-text."
    Follow this format strictly and respond with JSON only.

    Context:
    - The outline for this slide is: {outline} (Include the relevant portion of your outline here).
    - The "right-image-text" slide consists of an image on the right, a title on the left, and a body of text under the title.
    - image_prompt should describe the image for text-to-image generation, matching the slide content.

    Slide requirements:
    - type_id: "right-image-text"
    - inputs: title, image_prompt, body
    - Include a "speak-notes" field for presenter notes so make it as detailed as possible and match the slide content.

    Use the following template to respond:


    {
    "type_id": "right-image-text",
    "inputs": {
        "title": "<insert-title-here>",
        "image_prompt": "<insert-image-generating-prompt>",
        "body": "<insert-body-text-here>",
        "speak-notes": "<insert-speak-notes-here>"
    }
    }

`;

export const PROMPT_CREATE_TEXT_SLIDE = `
    You are the JarvisSlides tool, and you will generate a single slide of type "title-sub-text."
    Follow this format strictly and respond with JSON only.
    Context:
    - The outline for this slide is: {outline} (Include the relevant portion of your outline here).
    - The "title-sub-text" slide consists of a title, subtitle, and a body of text.
    - This slide has no images, just text fields.

    Slide requirements:
    - type_id: "title-sub-text"
    - inputs: title, subtitle, body
    - Include a "speak-notes" field for presenter notes so make it as detailed as possible and match the slide content.

    Use the following template to respond:


    {
    "type_id": "title-sub-text",
    "inputs": {
        "title": "<insert-title-here>",
        "subtitle": "<insert-subtitle-here>",
        "body": "<insert-body-text-here>",
        "speak-notes": "<insert-speak-notes-here>"
    }
    }

`;
