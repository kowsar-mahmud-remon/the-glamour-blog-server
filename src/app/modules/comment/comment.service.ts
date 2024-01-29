import httpStatus from 'http-status';
import ApiError from '../../../errors/ApiError';
import { IComment } from './comment.interface';
import { Comment } from './comment.model';

const createComment = async (data: IComment) => {
  const createComment = await Comment.create(data);

  if (!createComment) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Failed to create Comment');
  }

  return createComment;
};

const getAllComments = async () => {
  const result = await Comment.find({});
  return result;
};

const getSingleComment = async (id: string) => {
  const result = await Comment.findOne({ _id: id });
  return result;
};

const updateComment = async (id: string, payload: Partial<IComment>) => {
  const isExist = await Comment.findOne({ _id: id });

  if (!isExist) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Comment not found !');
  }

  const result = await Comment.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  });

  return result;
};

const deleteComment = async (id: string) => {
  const isExist = await Comment.findOne({ _id: id });

  if (!isExist) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Comment not found !');
  }

  const deletedComment = await Comment.findOneAndDelete(
    { _id: id },
    {
      new: true,
    }
  );

  return deletedComment;
};

export const CommentService = {
  createComment,
  getAllComments,
  getSingleComment,
  updateComment,
  deleteComment,
};
