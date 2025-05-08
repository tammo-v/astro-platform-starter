import { defineCollection } from 'astro:content'

export const collections = {
  manifesto: defineCollection({
    type: 'content',
    schema: undefined,
  }),
}
