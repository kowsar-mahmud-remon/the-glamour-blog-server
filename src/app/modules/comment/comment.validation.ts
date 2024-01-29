import { z } from 'zod';

const createCommentZodSchema = z.object({
  body: z.object({
    blogId: z.number({
      required_error: 'blogId is required',
    }),

    id: z.number({
      required_error: 'id is required',
    }),

    name: z.string({
      required_error: 'name is required',
    }),

    email: z.string({
      required_error: 'email is required',
    }),

    body: z.string({
      required_error: 'body is required',
    }),
  }),
});

export const CommentValidation = {
  createCommentZodSchema,
};
