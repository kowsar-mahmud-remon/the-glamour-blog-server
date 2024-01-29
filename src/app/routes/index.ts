import express from 'express';
import { BlogRoutes } from '../modules/blog/blog.route';
import { CommentRoutes } from '../modules/comment/comment.route';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/blog',
    route: BlogRoutes,
  },
  {
    path: '/comment',
    route: CommentRoutes,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));
export default router;
