import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { BlogController } from './blog.controller';
import { BlogValidation } from './blog.validation';
const router = express.Router();

router.get(
  '/:id',

  BlogController.getSingleBlog
);

router.get(
  '/',

  BlogController.getAllBlogs
);

router.post(
  '/create-blog',
  validateRequest(BlogValidation.createBlogZodSchema),

  BlogController.createBlog
);

router.delete('/:id', BlogController.deleteBlog);

router.patch('/:id', BlogController.updateBlog);

export const BlogRoutes = router;
