import { z } from 'zod';

const createBlogZodSchema = z.object({
  body: z.object({
    blogId: z.number({
      required_error: 'blogId is required',
    }),

    id: z.number({
      required_error: 'id is required',
    }),

    title: z.string({
      required_error: 'title is required',
    }),

    body: z.string({
      required_error: 'body is required',
    }),
  }),
});

export const BlogValidation = {
  createBlogZodSchema,
};
