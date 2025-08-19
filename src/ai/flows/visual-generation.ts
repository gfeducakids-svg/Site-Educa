// src/ai/flows/visual-generation.ts
'use server';

/**
 * @fileOverview This file contains the Genkit flow for generating dynamic image variations based on keywords or themes.
 *
 * The flow takes a keyword or theme as input and generates an image based on it.
 * This allows for A/B testing of different visuals to see which ones resonate most with potential customers.
 *
 * @param {GenerateImageInput} input - The input for the generateImage function.
 * @returns {Promise<GenerateImageOutput>} - The generated image as a data URI.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateImageInputSchema = z.object({
  theme: z.string().describe('The theme or keyword to use for generating the image.'),
});
export type GenerateImageInput = z.infer<typeof GenerateImageInputSchema>;

const GenerateImageOutputSchema = z.object({
  image: z.string().describe('The generated image as a data URI.'),
});
export type GenerateImageOutput = z.infer<typeof GenerateImageOutputSchema>;

export async function generateImage(input: GenerateImageInput): Promise<GenerateImageOutput> {
  return generateImageFlow(input);
}

const generateImageFlow = ai.defineFlow(
  {
    name: 'generateImageFlow',
    inputSchema: GenerateImageInputSchema,
    outputSchema: GenerateImageOutputSchema,
  },
  async input => {
    const {media} = await ai.generate({
      model: 'googleai/gemini-2.0-flash-preview-image-generation',
      prompt: `Generate an image based on the theme: ${input.theme}`,
      config: {
        responseModalities: ['TEXT', 'IMAGE'],
      },
    });

    if (!media || !media.url) {
      throw new Error('No image was generated.');
    }

    return {image: media.url};
  }
);
