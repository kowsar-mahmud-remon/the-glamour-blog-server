import httpStatus from 'http-status';
import ApiError from '../../../errors/ApiError';
import { IBlog } from './blog.interface';
import { Blog } from './blog.model';

const createBlog = async (data: IBlog) => {
  const createBlog = await Blog.create(data);

  if (!createBlog) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Failed to create Blog');
  }

  return createBlog;
};

const getAllBlogs = async () => {
  const result = await Blog.find({});
  return result;
};

const getSingleBlog = async (id: string) => {
  const result = await Blog.findOne({ _id: id });
  return result;
};

const updateBlog = async (id: string, payload: Partial<IBlog>) => {
  const isExist = await Blog.findOne({ _id: id });

  if (!isExist) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Blog not found !');
  }

  const result = await Blog.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  });

  return result;
};

const deleteBlog = async (id: string) => {
  const isExist = await Blog.findOne({ _id: id });

  if (!isExist) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Blog not found !');
  }

  const deletedBlog = await Blog.findOneAndDelete(
    { _id: id },
    {
      new: true,
    }
  );

  return deletedBlog;
};

export const BlogService = {
  createBlog,
  getAllBlogs,
  getSingleBlog,
  updateBlog,
  deleteBlog,
};
