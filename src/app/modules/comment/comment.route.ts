import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { CommentController } from './comment.controller';
import { CommentValidation } from './comment.validation';
const router = express.Router();

router.get(
  '/:id',

  CommentController.getSingleComment
);

router.get(
  '/',

  CommentController.getAllComments
);

router.post(
  '/create-comment',
  validateRequest(CommentValidation.createCommentZodSchema),

  CommentController.createComment
);

router.delete('/:id', CommentController.deleteComment);

router.patch('/:id', CommentController.updateComment);

export const CommentRoutes = router;
